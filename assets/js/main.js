const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

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
            showStatus("success", "Your email app should open with this inquiry addressed to ebrahim@zoomsolutions.ae. Send that email to deliver it. Nothing is sent until you send the email.");
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
            showStatus("error", "Complete the required fields before opening the email.");
            firstInvalid.focus();
            return;
        }

        const valueOf = (name) => {
            const control = quoteForm.elements.namedItem(name);
            return control && "value" in control ? String(control.value).trim() : "";
        };

        const body = [
            `Name: ${valueOf("name")}`,
            `Company: ${valueOf("company")}`,
            `Email: ${valueOf("email")}`,
            `Phone: ${valueOf("phone")}`,
            `Service: ${valueOf("service")}`,
            `Origin: ${valueOf("origin")}`,
            `Destination: ${valueOf("destination")}`,
            `Product / shipment type: ${valueOf("shipment_type")}`,
            `Temperature range: ${valueOf("temperature")}`,
            `Pickup date: ${valueOf("pickup_date")}`,
            `Delivery date: ${valueOf("delivery_date")}`,
            "",
            valueOf("message"),
        ].join("\n");

        const mailto = `mailto:ebrahim@zoomsolutions.ae?subject=${encodeURIComponent("Logistics quote request")}&body=${encodeURIComponent(body)}`;

        if (mailto.length > 1800) {
            showStatus("error", "This inquiry is too long to open in an email link. Email ebrahim@zoomsolutions.ae and include the same details.");
            return;
        }

        window.location.href = mailto;
        showStatus("success", "Your email app should open with this inquiry addressed to ebrahim@zoomsolutions.ae. Send that email to deliver it. Nothing is sent until you send the email.");
    });
}