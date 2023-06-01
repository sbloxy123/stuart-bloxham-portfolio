"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);
  return (
    <div className="">
      <div className="">
        <Link href="/info/cookies">
          <p>
            We use <span className="font-bold text-sky-400">cookies</span> on
            our site.
          </p>
        </Link>
      </div>

      <div className="">
        <button className="" onClick={() => setCookieConsent(false)}>
          Decline
        </button>
        <button className="" onClick={() => setCookieConsent(true)}>
          Allow Cookies
        </button>
        {/* <button className="px-5 py-2 text-gray-300 rounded-md border-gray-900">
          Decline
        </button>
        <button className="bg-gray-900 px-5 py-2 text-white rounded-lg">
          Allow Cookies
        </button> */}
      </div>
    </div>
  );
}
