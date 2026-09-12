import React, { useEffect } from "react";
import { Row } from "react-bootstrap";

// LinkedIn's badge script only scans the DOM for ".LI-profile-badge" once,
// when it loads. In a client-side-routed SPA that's too early if this page
// is reached via in-app navigation rather than a hard page load, so the
// script is (re)injected on every mount instead of living once in
// public/index.html — this way the badge renders whether you land on
// /about directly or navigate to it from Home.
function LinkedInBadge() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div
        className="badge-base LI-profile-badge"
        data-locale="fr_FR"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="oussama-laiche-2208a69b"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://fr.linkedin.com/in/oussama-laiche-2208a69b?trk=profile-badge"
        >
          Oussama LAICHE
        </a>
      </div>
    </Row>
  );
}

export default LinkedInBadge;
