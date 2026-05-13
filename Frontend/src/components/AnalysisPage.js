import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Select from 'react-select';
import './AnalysisPage.css';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = 'http://localhost:5000';

const countries = [
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "Angola", label: "Angola" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Brazil", label: "Brazil" },
  { value: "Brunei Darussalam", label: "Brunei Darussalam" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Cape Verde", label: "Cape Verde" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo Democratic Republic", label: "Congo Democratic Republic" },
  { value: "Congo Republic", label: "Congo Republic" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Cote d'Ivoire", label: "Cote d'Ivoire" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Greece", label: "Greece" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea Bissau", label: "Guinea Bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Honduras", label: "Honduras" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iran", label: "Iran" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyz Republic", label: "Kyrgyz Republic" },
  { value: "Laos", label: "Laos" },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libya", label: "Libya" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mexico", label: "Mexico" },
  { value: "Micronesia", label: "Micronesia" },
  { value: "Moldova", label: "Moldova" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar", label: "Myanmar" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "North Korea", label: "North Korea" },
  { value: "North Macedonia", label: "North Macedonia" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palestine", label: "Palestine" },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Qatar", label: "Qatar" },
  { value: "Romania", label: "Romania" },
  { value: "Russia", label: "Russia" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Samoa", label: "Samoa" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia", label: "Serbia" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovak Republic", label: "Slovak Republic" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  { value: "South Korea", label: "South Korea" },
  { value: "South Sudan", label: "South Sudan" },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Swaziland", label: "Swaziland" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syria", label: "Syria" },
  { value: "Tajikistan", label: "Tajikistan" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Thailand", label: "Thailand" },
  { value: "Timor-Leste", label: "Timor-Leste" },
  { value: "Togo", label: "Togo" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" }
];

function AnalysisPage() {
  const [country, setCountry] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false); // New state to toggle result visibility
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for navigation


  // Handle dropdown change
  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption ? selectedOption.value : "");
  };

  // Fetch safety data from /predict_safety
  const fetchSafetyData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(`${BACKEND_URL}/predict_safety`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country_name: country }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data. Please try again.");
      }

      const data = await response.json();
      setResult(data);
      setError("");
      setShowResult(true);
    } catch (err) {
      setError(err.message);
      setResult(null);
      setShowResult(false);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const getRiskClass = (riskLevel) => {
    if (riskLevel.toLowerCase().includes("high")) return "result-value-high-risk";
    if (riskLevel.toLowerCase().includes("medium")) return "result-value-medium-risk";
    return "result-value-low-risk";
  };

  const getTrendClass = (trend) => {
    if (trend.toLowerCase() === "stable") return "result-value-trend-stable";
    if (trend.toLowerCase() === "improving") return "result-value-trend-improving";
    if (trend.toLowerCase() === "deteriorating") return "result-value-trend-deteriorating";
    return "";
  };

  return (
    <div className="analysis-page">
      <h1>Let's Analyze....</h1>

      <div className="instructions">
        <p><b>Step-1:</b> Select a country from the dropdown menu.</p>
        <p><b>Step-2:</b> Hit the <b>Fetch Analysis</b> button.</p>
        
      </div>

      {/* Dropdown to select country */}
      <div className="dropdown-container">
        <Select
          options={countries}
          onChange={handleCountryChange}
          placeholder="Select a country"
          isSearchable={true}
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid #4fd1c5',
              color: '#fff',
              minHeight: '50px',
              fontSize: '1rem',
              fontFamily: "'Quicksand', 'Comfortaa', sans-serif",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: '#1a2332',
              border: '1px solid #4fd1c5',
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? '#4fd1c5' : '#1a2332',
              color: state.isFocused ? '#000' : '#fff',
              cursor: 'pointer',
              fontFamily: "'Quicksand', 'Comfortaa', sans-serif",
            }),
            singleValue: (base) => ({
              ...base,
              color: '#fff',
            }),
            input: (base) => ({
              ...base,
              color: '#fff',
            }),
            placeholder: (base) => ({
              ...base,
              color: '#aaa',
            }),
          }}
        />
      </div>

      {/* Button to fetch analysis */}
      <div className="fetch-analysis-container">
        <button onClick={fetchSafetyData} disabled={loading}>
          {loading ? "Analyzing..." : "Fetch Analysis"}
        </button>
      </div>

      {/* Display result */}
      {error && <p>{error}</p>}
      {showResult && result && (
        <div className="result-section">
          <p>
            <span className="result-label">Safety Status:</span>{" "}
            <span className={getRiskClass(result.safety_status)}>{result.safety_status}</span>
          </p>
          <p>
            <span className="result-label">Trend:</span>{" "}
            <span className={getTrendClass(result.trend)}>{result.trend}</span>
          </p>
        </div>
      )}

      {/* Buttons to view static resources */}
      <div className="buttons-container">
        <button onClick={() => window.open(`${BACKEND_URL}/heatmap`, "_blank")}>📊 View Heatmap</button>
        <button onClick={() => window.open(`${BACKEND_URL}/feature_importance`, "_blank")}>📈 View Feature Importance</button>
        <button onClick={() => window.open(`${BACKEND_URL}/visualize_map`, "_blank")}>🌐 Visualize in World Map</button>
        <button onClick={() => navigate("/recommendation")}>💡 Get Recommendation</button>
      </div>
    </div>
  );
}

export default AnalysisPage;
