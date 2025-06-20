import Link from "next/link";
import React from "react";

function SwitchAuthText({prompt, linkHref, linkText}) {
  return (
    <div>
      <p className="text-center mt-7 tracking-wide">
        {prompt}
        <Link href={linkHref} className="underline">
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default SwitchAuthText;
