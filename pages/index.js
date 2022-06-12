import * as React from "react";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function Index() {
  const links = [
    // { title: "Enter OTP", url: "/auth/enter-otp" },
    // { title: "MPIN", url: "/auth/mpin" },
    { title: "Signup", url: "/auth/signup" },
    // { title: "Verify Number", url: "/auth/verify-number" },
    { title: "Login", url: "/auth/login" },
    { title: "Dashboard", url: "/dashboard" },
    { title: "Starline Games", url: "/starline" },
    { title: "Jodi Jackpot", url: "/jodi-jackpot" },
    { title: "Notification", url: "/notification" },
    { title: "MPIN", url: "/mpin" },
    { title: "Add Fund", url: "/add-fund" },
    { title: "Withdraw Funds", url: "/withdraw-funds" },
    { title: "Fund request history", url: "/fund-request-history" },
    { title: "Morning Gamabet Dashboard", url: "/morning-gamabet" },
    { title: "Support", url: "/support" },
    { title: "Jackpot Dashboard", url: "/jackpot-dashboard" },
    { title: "Morning-Single Pana", url: "/morning-single-pana" },
    { title: "My Account", url: "/my-account" },
    { title: "Counter - Redux example", url: "/counter" },
    { title: "Login  Permission", url: "/login-permission" },
    { title: "Generate MPIN", url: "/generate-mpin" },
    { title: "Transaction Details", url: "/transaction-details" },
    { title: "Starline Dashboard", url: "/starline-dashboard" },
    { title: "Morning Gamabet A Dashboard", url: "/morning-gamabet-dashboard" },
    { title: "Morning Gamabet B Dashboard", url: "/morning-gamabet-dashboard-sliders" },
  ];
  return (
    <Container maxWidth="sm">
      <h1>Homepage Game-React</h1>
      <p>Links to individual pages are below</p>
      {links.map(({ title, url }) => (
        <p key={url}>
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </p>
      ))}
    </Container>
  );
}
