"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";

export async function submitInvitationForm(userId: string, formData: FormData) {
  await db.user.update({
    where: { id: userId },
    data: {
      isAttending: Boolean(formData.get("isAttending")),
      plusOneAttending: Boolean(formData.get("plusOneAttending")),
    },
  });
  revalidatePath("/");
}
