/* ==========================================================================
   Request modals
   - [data-request-modal="projects" | "clients"] → projets clients confidentiels,
     invitation à demander un entretien personnel.
   - [data-request-modal="cv"] → CV mis à jour, à demander par mail.
   Les textes sont résolus à l'ouverture selon `currentLanguage` (traduction.js).
   Le markup est injecté avant DOMContentLoaded pour que cursor.js lie ses .hover-target.
   ========================================================================== */

(function () {
    const EMAIL = 'danih.rakotoarison@gmail.com';

    const i18n = {
        fr: {
            close: 'Fermer',
            projectsLabel: 'projets terminés',
            clientsLabel: 'clients satisfaits',
            confidential: 'NDA',
            projectsTitle: 'Les vrais projets clients se présentent en entretien',
            projectsLead: 'Plus de <strong>20 projets livrés</strong> pour <strong>7 clients</strong>, dont la plupart sont couverts par des accords de confidentialité. Leurs noms, leurs interfaces et leurs chiffres ne peuvent pas être publiés ici.',
            projectsPoints: [
                ['desktop-outline', 'Les projets réels, avec démonstrations et captures autorisées'],
                ['git-network-outline', 'Les choix d\'architecture et les contraintes rencontrées'],
                ['trending-up-outline', 'Les résultats obtenus et les retours des clients']
            ],
            projectsNote: 'Les projets visibles sur ce portfolio sont des réalisations personnelles ou publiques.',
            projectsCta: 'Demander un entretien',
            projectsSecondary: 'Voir les projets publics',
            interviewSubject: 'Demande d\'entretien – Présentation de vos projets clients',
            interviewBody: 'Bonjour Danih,\n\nJ\'ai consulté votre portfolio et j\'aimerais échanger avec vous lors d\'un entretien personnel afin de découvrir les projets que vous avez réalisés pour vos clients.\n\nNom :\nEntreprise :\nContexte du besoin :\nDisponibilités proposées :\n\nCordialement,',

            cvBadge: 'Mis à jour',
            cvTitle: 'Mon CV est envoyé sur demande',
            cvLead: 'Il est à jour avec ma dernière expérience : <strong>direction technique d\'une holding multi-entités</strong>, depuis novembre 2025. Demandez-le par mail et je vous transmets directement la version la plus récente.',
            cvPoints: [
                ['document-text-outline', 'Version PDF complète, mission en cours incluse'],
                ['people-outline', 'Références et recommandations disponibles sur demande'],
                ['mail-open-outline', 'Le mail est déjà rédigé : il ne reste qu\'à l\'envoyer']
            ],
            cvNote: 'Si votre messagerie ne s\'ouvre pas, écrivez à ' + EMAIL + '.',
            cvCta: 'Demander le CV par mail',
            cvSecondary: 'Copier l\'adresse mail',
            copied: 'Adresse copiée',
            cvSubject: 'Demande de CV – Danih Stephane',
            cvBody: 'Bonjour Danih,\n\nJ\'ai consulté votre portfolio et je souhaiterais recevoir la version la plus récente de votre CV.\n\nNom :\nEntreprise :\nPoste ou mission envisagé(e) :\n\nMerci d\'avance.\nCordialement,'
        },
        en: {
            close: 'Close',
            projectsLabel: 'completed projects',
            clientsLabel: 'happy clients',
            confidential: 'NDA',
            projectsTitle: 'Real client projects are presented in an interview',
            projectsLead: 'More than <strong>20 projects delivered</strong> for <strong>7 clients</strong>, most of them covered by non-disclosure agreements. Their names, interfaces and figures can\'t be published here.',
            projectsPoints: [
                ['desktop-outline', 'The real projects, with demos and approved screenshots'],
                ['git-network-outline', 'The architecture decisions and the constraints faced'],
                ['trending-up-outline', 'The results achieved and client feedback']
            ],
            projectsNote: 'Projects shown on this portfolio are personal or public work.',
            projectsCta: 'Request an interview',
            projectsSecondary: 'See public projects',
            interviewSubject: 'Interview request – Presentation of your client projects',
            interviewBody: 'Hello Danih,\n\nI visited your portfolio and would like to meet with you for a personal interview to learn about the projects you have delivered for your clients.\n\nName:\nCompany:\nContext of the need:\nSuggested availability:\n\nBest regards,',

            cvBadge: 'Updated',
            cvTitle: 'My resume is sent on request',
            cvLead: 'It is up to date with my latest role: <strong>technical lead for a multi-entity holding company</strong>, since November 2025. Ask for it by email and I\'ll send you the most recent version directly.',
            cvPoints: [
                ['document-text-outline', 'Full PDF version, including my current role'],
                ['people-outline', 'References and recommendations available on request'],
                ['mail-open-outline', 'The email is already written: just hit send']
            ],
            cvNote: 'If your mail app doesn\'t open, write to ' + EMAIL + '.',
            cvCta: 'Request the resume by email',
            cvSecondary: 'Copy email address',
            copied: 'Address copied',
            cvSubject: 'Resume request – Danih Stephane',
            cvBody: 'Hello Danih,\n\nI visited your portfolio and would like to receive the most recent version of your resume.\n\nName:\nCompany:\nPosition or assignment considered:\n\nThank you in advance.\nBest regards,'
        },
        de: {
            close: 'Schließen',
            projectsLabel: 'abgeschlossene Projekte',
            clientsLabel: 'zufriedene Kunden',
            confidential: 'NDA',
            projectsTitle: 'Echte Kundenprojekte stelle ich im persönlichen Gespräch vor',
            projectsLead: 'Über <strong>20 abgeschlossene Projekte</strong> für <strong>7 Kunden</strong>, die meisten davon unter Geheimhaltungsvereinbarung. Namen, Oberflächen und Kennzahlen dürfen hier nicht veröffentlicht werden.',
            projectsPoints: [
                ['desktop-outline', 'Die echten Projekte, mit Demos und freigegebenen Screenshots'],
                ['git-network-outline', 'Architekturentscheidungen und die Rahmenbedingungen'],
                ['trending-up-outline', 'Erzielte Ergebnisse und Kundenfeedback']
            ],
            projectsNote: 'Die Projekte in diesem Portfolio sind persönliche oder öffentliche Arbeiten.',
            projectsCta: 'Gespräch anfragen',
            projectsSecondary: 'Öffentliche Projekte ansehen',
            interviewSubject: 'Gesprächsanfrage – Vorstellung Ihrer Kundenprojekte',
            interviewBody: 'Hallo Danih,\n\nich habe Ihr Portfolio angesehen und würde gerne ein persönliches Gespräch mit Ihnen führen, um die Projekte kennenzulernen, die Sie für Ihre Kunden umgesetzt haben.\n\nName:\nUnternehmen:\nKontext des Bedarfs:\nVorgeschlagene Termine:\n\nMit freundlichen Grüßen',

            cvBadge: 'Aktualisiert',
            cvTitle: 'Meinen Lebenslauf sende ich auf Anfrage',
            cvLead: 'Er ist auf dem Stand meiner letzten Position: <strong>technische Leitung einer Holding mit mehreren Gesellschaften</strong>, seit November 2025. Fragen Sie ihn per E-Mail an und ich sende Ihnen direkt die aktuelle Version.',
            cvPoints: [
                ['document-text-outline', 'Vollständige PDF-Version, inklusive aktueller Position'],
                ['people-outline', 'Referenzen und Empfehlungen auf Anfrage'],
                ['mail-open-outline', 'Die E-Mail ist schon vorbereitet: nur noch absenden']
            ],
            cvNote: 'Falls sich Ihr E-Mail-Programm nicht öffnet, schreiben Sie an ' + EMAIL + '.',
            cvCta: 'Lebenslauf per E-Mail anfragen',
            cvSecondary: 'E-Mail-Adresse kopieren',
            copied: 'Adresse kopiert',
            cvSubject: 'Anfrage Lebenslauf – Danih Stephane',
            cvBody: 'Hallo Danih,\n\nich habe Ihr Portfolio angesehen und würde gerne die aktuelle Version Ihres Lebenslaufs erhalten.\n\nName:\nUnternehmen:\nVorgesehene Stelle oder Mission:\n\nVielen Dank im Voraus.\nMit freundlichen Grüßen'
        },
        mg: {
            close: 'Hidio',
            projectsLabel: 'tetikasa vita',
            clientsLabel: 'mpanjifa faly',
            confidential: 'NDA',
            projectsTitle: 'Aseho mandritra ny resadresaka manokana ireo tetikasan\'ny mpanjifa tena izy',
            projectsLead: 'Tetikasa <strong>maherin\'ny 20 vita</strong> ho an\'ny <strong>mpanjifa 7</strong>, ary ny ankamaroany dia voafehin\'ny fifanarahana tsiambaratelo. Tsy azo avoaka eto ny anarany, ny endriny ary ny tarehimarika mifandraika aminy.',
            projectsPoints: [
                ['desktop-outline', 'Ireo tetikasa tena izy, miaraka amin\'ny fampisehoana sy sary nahazoana alalana'],
                ['git-network-outline', 'Ny safidy ara-drafitra sy ireo fameperana nosedraina'],
                ['trending-up-outline', 'Ny vokatra azo sy ny hevitry ny mpanjifa']
            ],
            projectsNote: 'Asa manokana na asa ampahibemaso ireo tetikasa hita ato amin\'ity portfolio ity.',
            projectsCta: 'Hangataka resadresaka',
            projectsSecondary: 'Hijery ireo tetikasa ampahibemaso',
            interviewSubject: 'Fangatahana resadresaka – Fampisehoana ireo tetikasan\'ny mpanjifanao',
            interviewBody: 'Salama Danih,\n\nNijery ny portfolio-nao aho ary te hiresaka aminao manokana mba hahafantarako ireo tetikasa vitanao ho an\'ny mpanjifanao.\n\nAnarana :\nOrinasa :\nToe-javatra ilana azy :\nFotoana malalaka atolotra :\n\nMisaotra betsaka,',

            cvBadge: 'Nohavaozina',
            cvTitle: 'Alefa rehefa angatahina ny CV-ko',
            cvLead: 'Efa nohavaozina miaraka amin\'ny traikefako farany izy : <strong>mpitarika ara-teknika ao amin\'ny holding misy orinasa maromaro</strong>, nanomboka ny Novambra 2025. Angataho amin\'ny mailaka izy dia halefako mivantana aminao ny dikan-teny farany.',
            cvPoints: [
                ['document-text-outline', 'Dikan-teny PDF feno, ahitana ny asa ataoko ankehitriny'],
                ['people-outline', 'Misy fanamarinana sy tolo-kevitra raha angatahina'],
                ['mail-open-outline', 'Efa voasoratra ny mailaka : alefaso fotsiny']
            ],
            cvNote: 'Raha tsy misokatra ny mailakao, soraty amin\'ny ' + EMAIL + '.',
            cvCta: 'Hangataka ny CV amin\'ny mailaka',
            cvSecondary: 'Handika ny adiresy mailaka',
            copied: 'Voadika ny adiresy',
            cvSubject: 'Fangatahana CV – Danih Stephane',
            cvBody: 'Salama Danih,\n\nNijery ny portfolio-nao aho ary te handray ny dikan-teny farany amin\'ny CV-nao.\n\nAnarana :\nOrinasa :\nToerana na iraka kasaina :\n\nMisaotra mialoha.\nMisaotra betsaka,'
        }
    };

    const t = () => i18n[(typeof currentLanguage !== 'undefined' && i18n[currentLanguage]) ? currentLanguage : 'fr'];

    const mailto = (subject, body) =>
        'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    const redactedLines = `
        <span class="rq-line w1"></span>
        <span class="rq-line w2 redact" style="--d:.55s"></span>
        <span class="rq-line w3"></span>
        <span class="rq-line w4 redact" style="--d:.75s"></span>
        <span class="rq-line w2"></span>
        <span class="rq-line w5 redact" style="--d:.95s"></span>`;

    const shell = (id, art) => `
        <div class="rq-overlay" id="${id}" aria-hidden="true">
            <div class="rq-modal" role="dialog" aria-modal="true" aria-labelledby="${id}-title" tabindex="-1">
                <button type="button" class="rq-close hover-target" data-rq-close>
                    <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                </button>
                <div class="rq-art" aria-hidden="true">${art}</div>
                <div class="rq-body">
                    <h2 class="rq-title" id="${id}-title"></h2>
                    <p class="rq-lead"></p>
                    <ul class="rq-points"></ul>
                    <p class="rq-note"></p>
                    <div class="rq-actions">
                        <a class="btn btn-secondary hover-target" data-rq-primary>
                            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon><span></span>
                        </a>
                        <button type="button" class="btn btn-primary hover-target" data-rq-secondary>
                            <ion-icon aria-hidden="true"></ion-icon><span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;

    const projectsArt = `
        <div>
            <div class="rq-stack">
                <div class="rq-folder f3"></div>
                <div class="rq-folder f2"></div>
                <div class="rq-folder f1">${redactedLines}</div>
                <div class="rq-seal">
                    <ion-icon name="lock-closed"></ion-icon>
                    <span data-rq-seal></span>
                </div>
            </div>
            <div class="rq-art-caption">
                <div class="rq-figure" data-rq-figure="projects"><strong>20+</strong><span></span></div>
                <div class="rq-figure" data-rq-figure="clients"><strong>7+</strong><span></span></div>
            </div>
        </div>`;

    const cvArt = `
        <div class="rq-doc-wrap">
            <div class="rq-doc">
                <div class="rq-doc-head">
                    <span class="rq-avatar"></span>
                    <span class="rq-lines"><span class="rq-line w3"></span><span class="rq-line w5"></span></span>
                </div>
                <span class="rq-badge" data-rq-badge></span>
                <div class="rq-timeline">
                    <div class="rq-entry is-new">
                        <span class="rq-line w4"></span><span class="rq-line w1"></span>
                    </div>
                    <div class="rq-entry"><span class="rq-line w3"></span><span class="rq-line w5"></span></div>
                    <div class="rq-entry"><span class="rq-line w2"></span><span class="rq-line w1"></span></div>
                    <div class="rq-entry"><span class="rq-line w4"></span><span class="rq-line w5"></span></div>
                </div>
            </div>
            <div class="rq-envelope"><ion-icon name="mail"></ion-icon></div>
        </div>`;

    document.body.insertAdjacentHTML('beforeend',
        shell('rq-projects', projectsArt) + shell('rq-cv', cvArt));

    const modals = {
        projects: document.getElementById('rq-projects'),
        cv: document.getElementById('rq-cv')
    };

    let active = null;
    let lastFocus = null;
    let copyTimer = null;

    function fill(overlay, kind) {
        const L = t();
        const isCv = kind === 'cv';
        const $ = (sel) => overlay.querySelector(sel);

        $('[data-rq-close]').setAttribute('aria-label', L.close);
        $('.rq-title').textContent = isCv ? L.cvTitle : L.projectsTitle;
        $('.rq-lead').innerHTML = isCv ? L.cvLead : L.projectsLead;
        $('.rq-note').textContent = isCv ? L.cvNote : L.projectsNote;
        $('.rq-points').innerHTML = (isCv ? L.cvPoints : L.projectsPoints)
            .map(([icon, text]) => `<li><span class="rq-ico"><ion-icon name="${icon}" aria-hidden="true"></ion-icon></span><span>${text}</span></li>`)
            .join('');

        const primary = $('[data-rq-primary]');
        primary.href = isCv ? mailto(L.cvSubject, L.cvBody) : mailto(L.interviewSubject, L.interviewBody);
        primary.querySelector('span').textContent = isCv ? L.cvCta : L.projectsCta;

        const secondary = $('[data-rq-secondary]');
        secondary.classList.remove('is-done');
        secondary.querySelector('ion-icon').setAttribute('name', isCv ? 'copy-outline' : 'albums-outline');
        secondary.querySelector('span').textContent = isCv ? L.cvSecondary : L.projectsSecondary;

        if (isCv) {
            $('[data-rq-badge]').textContent = L.cvBadge;
        } else {
            $('[data-rq-seal]').textContent = L.confidential;
            $('[data-rq-figure="projects"] span').textContent = L.projectsLabel;
            $('[data-rq-figure="clients"] span').textContent = L.clientsLabel;
            overlay.querySelectorAll('[data-rq-figure]').forEach(fig =>
                fig.classList.toggle('is-active', fig.dataset.rqFigure === kind));
        }
    }

    function open(kind) {
        const overlay = kind === 'cv' ? modals.cv : modals.projects;
        if (active) close(true);

        fill(overlay, kind);
        lastFocus = document.activeElement;
        active = overlay;

        // Force un reflow pour rejouer les animations à chaque ouverture
        overlay.classList.remove('is-open');
        void overlay.offsetWidth;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        overlay.querySelector('.rq-modal').scrollTop = 0;
        setTimeout(() => overlay.querySelector('[data-rq-primary]').focus({ preventScroll: true }), 60);
    }

    function close(silent) {
        if (!active) return;
        active.classList.remove('is-open');
        active.setAttribute('aria-hidden', 'true');
        active = null;
        document.body.style.overflow = '';
        if (!silent && lastFocus && typeof lastFocus.focus === 'function') {
            lastFocus.focus({ preventScroll: true });
        }
    }

    function copyEmail(button) {
        const L = t();
        const done = () => {
            button.classList.add('is-done');
            button.querySelector('ion-icon').setAttribute('name', 'checkmark-outline');
            button.querySelector('span').textContent = L.copied;
            clearTimeout(copyTimer);
            copyTimer = setTimeout(() => {
                button.classList.remove('is-done');
                button.querySelector('ion-icon').setAttribute('name', 'copy-outline');
                button.querySelector('span').textContent = t().cvSecondary;
            }, 2200);
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(EMAIL).then(done).catch(() => fallbackCopy() && done());
        } else if (fallbackCopy()) {
            done();
        }
    }

    function fallbackCopy() {
        const area = document.createElement('textarea');
        area.value = EMAIL;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        area.remove();
        return ok;
    }

    // Déclencheurs
    document.querySelectorAll('[data-request-modal]').forEach(trigger => {
        trigger.setAttribute('aria-haspopup', 'dialog');
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            open(trigger.dataset.requestModal);
        });
    });

    Object.values(modals).forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.closest('[data-rq-close]')) close();
        });

        overlay.querySelector('[data-rq-primary]').addEventListener('click', () => {
            // Laisse le mailto s'ouvrir, puis referme le modal
            setTimeout(() => close(), 300);
        });

        overlay.querySelector('[data-rq-secondary]').addEventListener('click', (e) => {
            if (overlay === modals.cv) {
                copyEmail(e.currentTarget);
            } else {
                close(true);
                const target = document.getElementById('portfolio');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Clavier : Échap pour fermer, Tab piégé dans le modal
    document.addEventListener('keydown', (e) => {
        if (!active) return;

        if (e.key === 'Escape') {
            e.stopPropagation();
            close();
            return;
        }

        if (e.key === 'Tab') {
            const focusables = active.querySelectorAll('a[href], button:not([disabled])');
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });
})();
