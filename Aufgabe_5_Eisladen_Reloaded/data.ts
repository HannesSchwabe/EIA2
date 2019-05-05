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
		alt: string;
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
			{ type:"radio", id: "radio1", name: "Becher/Waffel", value: "0.50", step: "", min: "", max: "", class: "", call: "Becher", alt: "0.50"},
			{ type: "radio", id: "radio2", name: "Becher/Waffel", value: "0.50", step: "", min: "", max: "", class: "", call: "Waffel", alt: "0.50" }
		],
		"Eissorten": [
			{ type: "number", id: "0", name: "Maracuja", value: "0", step: "1", min: "0", max: "5",  class: "Maracuja", call: "Maracuja", alt: "1"},
            { type: "number", id: "0", name: "Schokolade", value: "0", step: "1", min: "0", max: "5",  class: "Schokolade", call: "Schokolade", alt: "1" },
            { type: "number", id: "0", name: "Zitrone", value: "0", step: "1", min: "0", max: "5",  class: "Zitrone", call: "Zitrone", alt: "1" },
            { type: "number", id: "0", name: "Vanille", value: "0", step: "1", min: "0", max: "5",  class: "Vanille", call: "Vanille", alt: "1" },
            { type: "number", id: "0", name: "Pistazie", value: "0", step: "1", min: "0", max: "5",  class: "Pistazie", call: "Pistazie", alt: "1" },
            { type: "number", id: "0", name: "Joghurt", value: "0", step: "1", min: "0", max: "5",  class: "Joghurt", call: "Joghurt", alt: "1" },
		],
		"Toppings": [
			{ type: "checkbox", id: "check1.1", name: "Smarties", value: "0.50", step: "", min: "", max: "", class: "", call: "Smarties", alt: "0.50" },
			{ type: "checkbox", id: "check1.1", name: "Streußel", value: "0.50", step: "", min: "", max: "", class: "", call: "Streußel", alt: "0.50" },
			{ type: "checkbox", id: "check1.1", name: "Schoko-Sauce", value: "0.50", step: "", min: "", max: "", class: "", call: "Schoko-Sauce", alt: "0.50" },
			{ type: "checkbox", id: "check1.1", name: "Mandeln", value: "0.50", step: "", min: "", max: "", class: "", call: "Mandeln", alt: "0.50" }
		]
	};
}