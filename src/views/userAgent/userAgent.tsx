"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { UserAgentProvider, useUserAgentContext } from "@/components/providers/userAgentProvider";
import { useEffect } from "react";

const UserAgent = () => {
  const { userAgent, setUserAgent } = useUserAgentContext()

  useEffect(() => {
    setUserAgent(window.navigator.userAgent)
  }, [setUserAgent])


  return (
    <div>
      <BackToHome />

      {userAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{userAgent}</div>
        </div>
      )}

      {!userAgent && <div>No user agent</div>}
    </div>
  );
};


export default function UserAgentDisplay({ initialUserAgent }: { initialUserAgent: string }) {
  return (
    <UserAgentProvider userAgent={initialUserAgent}>
      <UserAgent />
    </UserAgentProvider>
  )
}