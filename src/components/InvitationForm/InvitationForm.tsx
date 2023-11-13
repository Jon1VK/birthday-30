"use client";

import { Switch } from "@headlessui/react";
import type { User } from "@prisma/client";
import { submitInvitationForm } from "~/server/actions/submitInvitationForm";
import { cn } from "~/utils/cn";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export const InvitationForm = ({ user }: { user: User }) => {
  const submitUserInvitationForm = submitInvitationForm.bind(null, user.id);
  const [showInputs, setShowInputs] = useState(
    Boolean(user.isAttending == null),
  );

  const submitForm = async (formData: FormData) => {
    await submitUserInvitationForm(formData);
    setShowInputs(false);
  };

  return (
    <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-8 py-12 shadow sm:rounded-lg sm:px-16">
        <form className="space-y-6" action={submitForm}>
          <h2 className="font-display text-xl tracking-wide text-gray-900 sm:text-2xl">
            Ilmoittautuminen
          </h2>
          {showInputs ? (
            <>
              <Switch.Group as="div" className="flex items-center">
                <Switch
                  name="isAttending"
                  defaultChecked={Boolean(user.isAttending)}
                  className="ui-checked:bg-emerald-600 bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    className="ui-checked:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  />
                </Switch>
                <Switch.Label
                  as="span"
                  className="ml-3 text-sm text-gray-900 font-medium"
                >
                  Osallistun
                </Switch.Label>
              </Switch.Group>
              {user.plusOneAllowed && (
                <Switch.Group as="div" className="flex items-center">
                  <Switch
                    name="plusOneAttending"
                    defaultChecked={Boolean(user.plusOneAttending)}
                    className="ui-checked:bg-emerald-600 bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                  >
                    <span
                      aria-hidden="true"
                      className="ui-checked:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    />
                  </Switch>
                  <Switch.Label
                    as="span"
                    className="ml-3 text-sm text-gray-900 font-medium"
                  >
                    Seuralainen osallistuu
                  </Switch.Label>
                </Switch.Group>
              )}
              <SubmitButton />
            </>
          ) : (
            <>
              <p>Kiitos ilmoittautumisesta! Alla vastauksesi.</p>
              <ul className="space-y-2">
                <li>
                  <span>Osallistun: </span>
                  <span className="font-semibold">
                    {user.isAttending ? (
                      <>
                        Kyllä <span className="text-xl">🥳</span>
                      </>
                    ) : (
                      <>
                        En <span className="text-xl">🥹</span>
                      </>
                    )}
                  </span>
                </li>
                {user.plusOneAllowed && (
                  <li>
                    <span>Seuralainen osallistuu: </span>
                    <span className="font-semibold">
                      {user.plusOneAttending ? (
                        <>
                          Kyllä <span className="text-xl">🥳</span>
                        </>
                      ) : (
                        <>
                          Ei <span className="text-xl">🥹</span>
                        </>
                      )}
                    </span>
                  </li>
                )}
              </ul>
              <button
                type="button"
                onClick={() => setShowInputs(true)}
                className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Muuta valintojasi
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600",
        pending ? "animate-pulse" : "",
      )}
    >
      {!pending ? "Tallenna valinnat" : "Tallentaa"}
    </button>
  );
};
