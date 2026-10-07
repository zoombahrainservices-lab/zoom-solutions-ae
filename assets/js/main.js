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

const quoteForm = document.querySelector(".contact-form");

if (quoteForm) {
    const status = document.getElementById("form-status");
    const honeypot = quoteForm.querySelector("[name='company_website']");

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

    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();
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
            const emailInvalid = control instanceof HTMLInputElement && control.type === "email" && value !== "" && !control.checkValidity();
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

        const valueOf = (name) => {
            const control = quoteForm.elements.namedItem(name);
            return control && "value" in control ? String(control.value).trim() : "";
        };

        const submitButton = quoteForm.querySelector("[type='submit']");
        const submitLabel = submitButton ? submitButton.textContent : "Submit Inquiry";
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
            _template: "table",
            _captcha: "false",
            _cc: "neaz@zoombahrain.co",
            company: valueOf("company"),
            phone: valueOf("phone"),
            service: valueOf("service"),
            origin: valueOf("origin"),
            destination: valueOf("destination"),
            shipment_type: valueOf("shipment_type"),
            temperature: valueOf("temperature"),
            pickup_date: valueOf("pickup_date"),
            delivery_date: valueOf("delivery_date"),
            message: valueOf("message"),
            _honey: "",
        };

        fetch("https://formsubmit.co/ajax/ebrahim@zoomsolutions.ae", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then(async (response) => {
                const data = await response.json().catch(() => null);
                const message = data && typeof data.message === "string" ? data.message : "";
                const accepted = response.ok && data && (data.success === true || data.success === "true");
                if (!accepted) {
                    const waiting = /activat/i.test(message);
                    showStatus(
                        "error",
                        waiting
                            ? "The UAE office still needs to confirm form delivery. Email ebrahim@zoomsolutions.ae with these details until that confirmation is done."
                            : "The inquiry was not sent. Email ebrahim@zoomsolutions.ae with the same details, or use WhatsApp. Nothing has been delivered yet."
                    );
                    return;
                }
                const serviceName = valueOf("service");
                if (typeof window.zoomTrack === "function") {
                    window.zoomTrack("quote_submit", { service_name: serviceName });
                }
                quoteForm.reset();
                showStatus("success", "Your inquiry has been sent to ebrahim@zoomsolutions.ae, with a copy to the Bahrain office. They will reply by email.");
            })
            .catch(() => {
                showStatus("error", "The inquiry was not sent. Email ebrahim@zoomsolutions.ae with the same details, or use WhatsApp. Nothing has been delivered yet.");
            })
            .finally(() => {
                if (submitButton instanceof HTMLButtonElement) {
                    submitButton.disabled = false;
                    submitButton.textContent = submitLabel;
                }
            });
    });
}