import React, { useState, useEffect } from 'react';
import "./Translate.css";
import languages from './Languages';

const Translate = () => {
    const [inputText, setInputText] = useState("");
    const [checkboxTick, setCheckboxTick] = useState(false);
    const [inputLanguage, setInputLanguage] = useState('auto');
    const [outputLanguage, setOutputLanguage] = useState('en');

    const handleCheckboxChange = () => {
        setCheckboxTick(!checkboxTick);
    };

    useEffect(() => {
        populateDropdown(document.querySelector("#input-language"), languages);
        populateDropdown(document.querySelector("#output-language"), languages);
    }, []);
    console.log("language is",languages);
    console.log("choose language is",inputLanguage);

    const populateDropdown = (dropdown, options) => {
        dropdown.querySelector("ul").innerHTML = "";
        options.forEach((option) => {
            const li = document.createElement("li");
            const title = option.name + " (" + option.native + ")";
            li.innerHTML = title;
            li.dataset.value = option.code;
            li.classList.add("option");
            dropdown.querySelector("ul").appendChild(li);
        });
    };

    const handleInputLanguageChange = (languageCode) => {
        setInputLanguage(languageCode);
        translate();
    };

    const handleOutputLanguageChange = (languageCode) => {
        setOutputLanguage(languageCode);
        translate();
    };


    const translate = () => {
        const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';
        const inputLanguageCode = inputLanguage === 'auto' ? 'auto' : inputLanguage.split('-')[0];
        const outputLanguageCode = outputLanguage.split('-')[0];

        if (inputText && apiKey) {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguageCode}&tl=${outputLanguageCode}&dt=t&q=${encodeURI(
                inputText
            )}`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    const translatedText = data[0][0][0];
                    setInputText(translatedText);
                })
                .catch((error) => {
                    console.error('Translation error:', error);
                });
        }
    };

    const handleInputChange = (e) => {
        const newText = e.target.value;
        setInputText(newText);
        translate();
    };

    return (
        <>
            <div className="mode">
                <label className="toggle" htmlFor="dark-mode-btn">
                    <div className="toggle-track">
                        <input
                            type="checkbox"
                            className="toggle-checkbox"
                            id="dark-mode-btn"
                            checked={checkboxTick}
                            onChange={handleCheckboxChange}
                        />
                        <span className="toggle-thumb"></span>
                    </div>
                </label>
            </div>
            <div className="container">
                <div className="card input-wrapper">
                    <div className="from">
                        <span className="heading">From :</span>
                        <div className="dropdown-container" id="input-language">
                            <div className="dropdown-toggle">
                                <ion-icon name="globe-outline"></ion-icon>
                                <span className="selected" data-value={inputLanguage}>
                                    {inputLanguage === 'auto' ? 'Auto Detect' : inputLanguage}
                                </span>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul className="dropdown-menu">
                                {languages && languages.map((language) => (
                                    <li
                                        key={language.code}
                                        className={`option ${inputLanguage === language.code ? 'active' : ''}`}
                                        onClick={() => handleInputLanguageChange(language.code)}
                                    >
                                        {language.name} ({language.native})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-area">
                        <textarea
                            id="input-text"
                            cols="30"
                            rows="10"
                            placeholder="Enter your text here"
                            value={inputText}
                            onChange={handleInputChange}
                        ></textarea>
                        <div className="chars"><span id="input-chars">0</span> / 5000</div>
                    </div>
                    <div className="card-bottom">
                        <p>Or choose your document!</p>
                        <label htmlFor="upload-document">
                            <span id="upload-title">Choose File</span>
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                            <input type="file" id="upload-document" hidden />
                        </label>
                    </div>
                </div>

                <div className="center">
                    <div className="swap-position">
                        <ion-icon name="swap-horizontal-outline"></ion-icon>
                    </div>
                </div>

                <div className="card output-wrapper">
                    <div className="to">
                        <span className="heading">To :</span>
                        <div className="dropdown-container" id="output-language">
                            <div className="dropdown-toggle">
                                <ion-icon name="globe-outline"></ion-icon>
                                <span className="selected" data-value={outputLanguage}>
                                    {outputLanguage === 'auto' ? 'Auto Detect' : outputLanguage}
                                </span>
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <ul className="dropdown-menu">
                                {languages && languages.map((language) => (
                                    <li
                                        key={language.code}
                                        className={`option ${outputLanguage === language.code ? 'active' : ''}`}
                                        onClick={() => handleOutputLanguageChange(language.code)}
                                        
                                    >
                                        {language.name} ({language.native})
                                        {console.log("choosed ",language.name)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <textarea
                        id="output-text"
                        cols="30"
                        rows="10"
                        placeholder="Translated text will appear here"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        disabled={checkboxTick}
                    ></textarea>
                    <div className="card-bottom">
                        <p>Download as a document!</p>
                        <button id="download-btn">
                            <span>Download</span>
                            <ion-icon name="cloud-download-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Translate;
