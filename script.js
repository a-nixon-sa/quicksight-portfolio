async function verifyInsurance() {

    const memberId = document.getElementById("memberId").value;

    const response = await fetch("insurance-data.json");
    const data = await response.json();

    const patient = data.find(
        item => item.memberId === memberId
    );

    const results = document.getElementById("results");

    if (patient) {
        results.innerHTML = `
            <h3>Verification Results</h3>
            <p><strong>Provider:</strong> ${patient.provider}</p>
            <p><strong>Plan:</strong> ${patient.plan}</p>
            <p><strong>Copay:</strong> ${patient.copay}</p>
            <p><strong>Frame Allowance:</strong> ${patient.frameAllowance}</p>
            <p><strong>Contact Lens Allowance:</strong> ${patient.contactLensAllowance}</p>
            <p><strong>Status:</strong> ${patient.eligibility}</p>
        `;
    }
    else {
        results.innerHTML = "<p>No insurance record found.</p>";
    }
}

function encryptPassword() {

    const password =
        document.querySelectorAll('input[type="password"]')[0].value;

    const encrypted =
        btoa(password);

    document.getElementById("encryptedResult").innerHTML =
        `
        <h3>Encrypted Password Preview</h3>

        <p><strong>Original:</strong> ${password}</p>

        <p><strong>Encoded:</strong> ${encrypted}</p>
        `;
}
