namespace L04_AssocArraysAndExport {
	// Heterogenes assoziatives Array mit vordefinierten Schlüsseln
	export interface HeteroPredefined {
		type: string;
		id: string;
		name: string;
        value: string;
        step: string;
        min: string;
        max: string;
		class: string;
		call: string;
	}

	// Homogenes assoziatives Array mit variablen Schlüsseln, 
	// ein String wird abgebildet auf ein Array mit Objekten von obigen Typ 
	export interface HomogenousArray {
        [key: string]: HeteroPredefined[];
	}

	// Beispieldaten auf Basis der oben angegebenen Strukturen
	export let data: HomogenousArray
		= {
		"Optionen": [
			{ type:"radio", id: "radio1", name: "Becher/Waffel", value: "0.50", step: "", min: "", max: "", class: "", call: "Becher" },
			{ type: "radio", id: "radio2", name: "Becher/Waffel", value: "0.50", step: "", min: "", max: "", class: "", call: "Waffel" }
		],
		"Eissorten": [
			{ type: "number", id: "0", name: "Stepper", value: "0", step: "1", min: "0", max: "5",  class: "Maracuja", call: "Maracuja" },
            { type: "number", id: "0", name: "Stepper", value: "0", step: "1", min: "0", max: "5",  class: "Schokolade", call: "Schokolade" },
            { type: "number", id: "0", name: "Stepper", value: "0", step: "1", min: "0", max: "5",  class: "Zitrone", call: "Zitrone" },
            { type: "number", id: "0", name: "Stepper", value: "0", step: "1", min: "0", max: "5",  class: "Vanille", call: "Vanille" },
            { type: "number", id: "0", name: "Stepper", value: "0", step: "1", min: "0", max: "5",  class: "Pistazie", call: "Pistazie" },
            { type: "number", id: "0", name: "Stepper", value: "0", step: "1", min: "0", max: "5",  class: "Joghurt", call: "Joghurt" },
		],
		"Toppings": [
			{ type: "checkbox", id: "check1.1", name: "Smarties", value: "0.50", step: "", min: "", max: "", class: "", call: "Smarties" },
			{ type: "checkbox", id: "check1.1", name: "Streußel", value: "0.50", step: "", min: "", max: "", class: "", call: "Streußel" },
			{ type: "checkbox", id: "check1.1", name: "Schoko-Sauce", value: "0.50", step: "", min: "", max: "", class: "", call: "Schoko-Sauce" },
			{ type: "checkbox", id: "check1.1", name: "Mandeln", value: "0.50", step: "", min: "", max: "", class: "", call: "Mandeln" }
		]
	};
}