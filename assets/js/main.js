const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

document.querySelectorAll(".mail-link").forEach((link) => {
    const user = link.getAttribute("data-mail-user");
    const domain = link.getAttribute("data-mail-domain");
    if (!user || !domain) return;
    const address = `${user}@${domain}`;
    const subject = link.getAttribute("data-mail-subject");
    link.href = subject ? `mailto:${address}?subject=${encodeURIComponent(subject)}` : `mailto:${address}`;
    if (!link.textContent.trim()) link.textContent = address;
});

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const QUOTE_INTRO = "Hello Zoom Solutions, I would like a quotation enquiry.";

function quotationText() {
    const form = document.querySelector(".contact-form");
    const lines = [QUOTE_INTRO];
    if (!form) return lines.join("\n");

    const pairs = [
        ["Name", "name"],
        ["Company", "company"],
        ["Email", "email"],
        ["Phone", "phone"],
        ["Service", "service"],
        ["Temperature", "temperature"],
        ["Origin", "origin"],
        ["Destination", "destination"],
        ["Shipment", "shipment_type"],
        ["Pickup", "pickup_date"],
        ["Delivery", "delivery_date"],
        ["Details", "message"],
    ];

    for (const [label, name] of pairs) {
        const control = form.elements.namedItem(name);
        const value = control && "value" in control ? String(control.value).trim() : "";
        if (value) lines.push(`${label}: ${value}`);
    }

    return lines.join("\n");
}

document.querySelectorAll("[data-quote-wa]").forEach((link) => {
    link.addEventListener("click", (event) => {
        const number = link.getAttribute("data-quote-wa");
        if (!number) return;
        event.preventDefault();
        const url = `https://wa.me/${number}?text=${encodeURIComponent(quotationText())}`;
        window.open(url, "_blank", "noopener,noreferrer");
    });
});

const whatsappToggle = document.getElementById("whatsapp-toggle");
const whatsappMenu = document.getElementById("whatsapp-menu");
const whatsappWidget = document.querySelector(".whatsapp-widget");

if (whatsappToggle && whatsappMenu && whatsappWidget) {
    whatsappToggle.addEventListener("click", () => {
        const isOpen = whatsappWidget.classList.toggle("is-open");
        whatsappToggle.setAttribute("aria-expanded", String(isOpen));
    });

    whatsappMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            whatsappWidget.classList.remove("is-open");
            whatsappToggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Node)) return;
        if (!whatsappToggle.contains(target) && !whatsappMenu.contains(target)) {
            whatsappWidget.classList.remove("is-open");
            whatsappToggle.setAttribute("aria-expanded", "false");
        }
    });
}

// Quote form delivery uses Formspree so a static GitHub Pages site can send
// the enquiry over HTTPS. Nothing here opens the visitor's email application.
//
// This file has no Formspree endpoint yet. Replace YOUR_FORM_ID after creating
// the form. Do not put API keys or other secrets in this file; the form id is public.
//
// Configure both of these in the Formspree dashboard, not in frontend code:
//   1. Form endpoint — https://formspree.io/forms → create a form → copy the id
//      from https://formspree.io/f/<id> into FORMSPREE_FORM_ID below.
//   2. Business inbox — form Settings → email notifications. Set the recipient
//      to ebrahim@zoomsolutions.ae and add neaz@zoombahrain.co if Bahrain
//      should receive a copy. Formspree does not take those addresses from this script.
const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

const quoteForm = document.querySelector(".contact-form");

if (quoteForm) {
    const status = document.getElementById("form-status");
    const honeypot = quoteForm.querySelector("[name='company_website']");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let submitting = false;

    const showStatus = (kind, message) => {
        if (!status) return;
        status.hidden = false;
        status.className = `form-status is-${kind}`;
        status.textContent = message;
    };

    const clearInvalid = () => {
        quoteForm.querySelectorAll(".field.is-invalid").forEach((field) => {
            field.classList.remove("is-invalid");
            const control = field.querySelector("input, select, textarea");
            if (control) control.removeAttribute("aria-invalid");
            field.querySelector(".field-error")?.remove();
        });
    };

    const markInvalid = (control, message) => {
        const field = control.closest(".field");
        if (!field) return;
        field.classList.add("is-invalid");
        control.setAttribute("aria-invalid", "true");
        let error = field.querySelector(".field-error");
        if (!error) {
            error = document.createElement("p");
            error.className = "field-error";
            error.id = `${control.id}-error`;
            field.append(error);
        }
        error.textContent = message;
        control.setAttribute("aria-describedby", error.id);
    };

    const valueOf = (name) => {
        const control = quoteForm.elements.namedItem(name);
        return control && "value" in control ? String(control.value).trim() : "";
    };

    const formEndpoint = () => {
        if (!/^[a-z0-9]{6,}$/i.test(FORMSPREE_FORM_ID) || FORMSPREE_FORM_ID === "YOUR_FORM_ID") return "";
        return `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
    };

    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (submitting) return;
        clearInvalid();

        if (honeypot instanceof HTMLInputElement && honeypot.value.trim()) {
            showStatus("success", "Thank you. If you still need help, email ebrahim@zoomsolutions.ae or use WhatsApp.");
            return;
        }

        const required = [
            ["name", "Enter your name."],
            ["email", "Enter a valid email address."],
            ["service", "Select a service."],
            ["message", "Describe the shipment."],
        ];

        let firstInvalid = null;
        for (const [name, message] of required) {
            const control = quoteForm.elements.namedItem(name);
            if (!(control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement)) continue;
            const value = control.value.trim();
            const emailInvalid = name === "email" && value !== "" && !emailPattern.test(value);
            if (!value || emailInvalid) {
                markInvalid(control, message);
                firstInvalid = firstInvalid || control;
            }
        }

        if (firstInvalid) {
            showStatus("error", "Complete the required fields before sending the inquiry.");
            firstInvalid.focus();
            return;
        }

        const endpoint = formEndpoint();
        const submitButton = quoteForm.querySelector("[type='submit']");
        const submitLabel = submitButton ? submitButton.textContent : "Submit Inquiry";
        const releaseSubmit = () => {
            submitting = false;
            if (submitButton instanceof HTMLButtonElement) {
                submitButton.disabled = false;
                submitButton.textContent = submitLabel;
            }
        };

        if (!endpoint) {
            showStatus("error", "This form is not connected to an inbox yet. Email ebrahim@zoomsolutions.ae with these details, or use WhatsApp. Nothing has been delivered.");
            return;
        }

        submitting = true;
        if (submitButton instanceof HTMLButtonElement) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending…";
        }
        showStatus("busy", "Sending your inquiry…");

        const payload = {
            name: valueOf("name"),
            email: valueOf("email"),
            _replyto: valueOf("email"),
            _subject: "Logistics quote request from zoomsolutions.ae",
            company: valueOf("company"),
            phone: valueOf("phone"),
            service: valueOf("service"),
            temperature: valueOf("temperature"),
            origin: valueOf("origin"),
            destination: valueOf("destination"),
            shipment_type: valueOf("shipment_type"),
            pickup_date: valueOf("pickup_date"),
            delivery_date: valueOf("delivery_date"),
            message: valueOf("message"),
        };

        let sent = false;
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (!response.ok) {
                    showStatus("error", "The inquiry was not sent. Email ebrahim@zoomsolutions.ae with the same details, or use WhatsApp. Nothing has been delivered yet.");
                    return;
                }
                sent = true;
                if (typeof window.zoomTrack === "function") {
                    window.zoomTrack("quote_submit", { service_name: valueOf("service") });
                }
                window.location.assign(new URL("../thank-you.html", window.location.href).href);
            })
            .catch(() => {
                showStatus("error", "The inquiry was not sent. Email ebrahim@zoomsolutions.ae with the same details, or use WhatsApp. Nothing has been delivered yet.");
            })
            .finally(() => {
                if (!sent) releaseSubmit();
            });
    });
}