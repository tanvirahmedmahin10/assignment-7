"use client";
export default function FormattedDate() {
  const datenow = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return <span>{datenow}</span>;
}