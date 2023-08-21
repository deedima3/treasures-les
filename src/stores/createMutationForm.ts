import { createMutation } from "@tanstack/svelte-query";
import toast from "svelte-french-toast";
import type { ZodValidation } from "sveltekit-superforms";
import { superForm, superValidateSync } from "sveltekit-superforms/client";
import type { AnyZodObject } from "zod";
import axios, { type AxiosError } from "axios";
import { get } from "svelte/store";
import { translate } from "utils/utils";

interface MutationFormParams {
    mutationApi: (data: any) => any,
    actionName: string,
    formSchema: ZodValidation<AnyZodObject>,
    successFn?: (data: any) => void,
    errorFn?: (err: any) => void,
    refetch?: () => void,
    callbackRoute?: string
}

export function createMutationForm({ mutationApi, actionName, successFn, errorFn, refetch, callbackRoute, formSchema }: MutationFormParams) {
    const form = superForm(
        superValidateSync(formSchema),
        {
            SPA: true,
            validators: formSchema,
            validationMethod: 'submit-only',
            onSubmit: (data) => {
                pushData(data)
            }
        }
    );

    const mutation = createMutation({
        mutationFn: (data) => {
            return mutationApi(data)
        },
        onSuccess: (data) => {
            toast.success(translate(`success.200`, {
                data: actionName
            }), {
                position: "bottom-center"
            })
            if (successFn) {
                console.log(data)
                successFn(data)
            }
            if (callbackRoute) {
                window.location.assign(callbackRoute)
            }
            if (refetch) {
                refetch()
            }
        },
        onError: (err: Error | AxiosError<ApiResponse<unknown>>) => {
            if (axios.isAxiosError(err) && err.response) {
                const response = err.response.data as ApiResponse<unknown>;
                toast.error(translate(`api_error.${response.error.code}`, {
                    data: actionName
                }), {
                    position: "bottom-center"
                });
            }
            if (errorFn) {
                errorFn(err);
            }
        },
    })
    const mutate = get(mutation).mutate

    const pushData = (data: any) => {
        mutate(data.formData)
    }

    return {
        form: {
            form
        },
        mutation: {
            mutation
        }
    }
}