import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {

  const router = useRouter();

  /**
   * Automatically redirects to the projects
   * page when user hits 404. To render a 
   * specific 404 view, update the return value.
   */

  useEffect(() => {
    router.replace('/projects');
  })

  return null;
}