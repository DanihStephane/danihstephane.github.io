/**
 * Champ téléphone international du formulaire de contact.
 *
 * S'appuie sur intl-tel-input (v29, bundle "WithUtils") :
 *  - déroulant pays avec drapeaux + recherche (countrySearch)
 *  - détection automatique du pays via géolocalisation IP (initialCountryLookup)
 *  - indicatif (+code) affiché à gauche (separateDialCode)
 *  - masque/format au fil de la saisie (formatAsYouType) + saisie restreinte
 *    au format du pays (strictMode)
 *  - placeholder = numéro d'exemple du pays sélectionné (placeholderNumberPolicy)
 *
 * On expose l'instance sur window.itiPhone pour qu'email.js puisse récupérer
 * le numéro complet au format international (getNumber()).
 */
(function () {
  const input = document.querySelector("#telephone");
  if (!input || typeof window.intlTelInput !== "function") return;

  const FALLBACK_COUNTRY = "mg"; // Madagascar par défaut si l'IP est indisponible

  const iti = window.intlTelInput(input, {
    // Détection auto du pays : si l'IP ne répond pas, on retombe sur Madagascar.
    initialCountryLookup: () =>
      fetch("https://ipapi.co/json/")
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((data) => data.country_code || FALLBACK_COUNTRY)
        .catch(() => FALLBACK_COUNTRY),
    // separateDialCode, formatAsYouType, strictMode, placeholderNumberPolicy,
    // countrySearch et showFlags sont déjà activés par défaut en v29.
  });

  // Accessible depuis email.js pour envoyer le numéro complet (+261 34 ...).
  window.itiPhone = iti;

  // Petit retour visuel : bordure rouge si un numéro est saisi mais invalide.
  const clearInvalid = () => input.classList.remove("iti-invalid");
  input.addEventListener("input", clearInvalid);
  input.addEventListener("countrychange", clearInvalid);
  input.addEventListener("blur", () => {
    if (input.value.trim() && !iti.isValidNumber()) {
      input.classList.add("iti-invalid");
    } else {
      clearInvalid();
    }
  });
})();
