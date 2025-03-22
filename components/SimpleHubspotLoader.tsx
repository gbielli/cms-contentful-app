"use client";

import { useEffect } from "react";

export default function SimpleHubspotLoader() {
  useEffect(() => {
    // Créer l'élément de script
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    script.async = true;
    script.charset = "utf-8";

    // Après le chargement du script, créer le formulaire
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "144900560",
          formId: "71198687-1eaa-4d1e-af2b-97908e5933b8",
          target: "#hubspot-form-container",
        });
      }
    };

    // Ajouter le script au document
    document.body.appendChild(script);

    // Nettoyage lors du démontage du composant
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="hubspot-form-container" className="my-8 max-w-lg mx-auto"></div>
  );
}

declare global {
  interface Window {
    hbspt: any;
  }
}
