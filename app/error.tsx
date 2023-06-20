"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

const ErrorState = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState title="Oh, No!" subtitle="Something went wrong" />
  );
};

export default ErrorState;
