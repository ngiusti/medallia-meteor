if (Meteor.isClient) {
  Template.lead_form.helpers({
    countries: function(){
      return [
        {name: "United States"},
        {name: "Argentina"},
        {name: "Australia"},
        {name: "Austria"},
        {name: "Canada"},
        {name: "Czech Republic"},
        {name: "Denmark"},
        {name: "France"},
        {name: "Germany"},
        {name: "Greece"},
        {name: "Italy"},
        {name: "Romania"},
        {name: "Russia"},
        {name: "Spain"},
        {name: "Sweden"},
        {name: "Switzerland"},
        {name: "Turkey"},
        {name: "Ukraine"},
        {name: "United Kingdom"},
        {name: "Afghanistan"},
        {name: "Albania"},
        {name: "Algeria"},
        {name: "Andorra"},
        {name: "Angola"},
        {name: "Antigua & Barbuda"},
        {name: "Armenia"},
        {name: "Azerbaijan"},
        {name: "Bahamas"},
        {name: "Bahrain"},
        {name: "Bangladesh"},
        {name: "Barbados"},
        {name: "Belarus"},
        {name: "Belgium"},
        {name: "Belize"},
        {name: "Benin"},
        {name: "Bhutan"},
        {name: "Bolivia"},
        {name: "Bosnia & Herzegovina"},
        {name: "Botswana"},
        {name: "Brazil"},
        {name: "Brunei"},
        {name: "Bulgaria"},
        {name: "Burkina Faso"},
        {name: "Burundi"},
        {name: "Cambodia"},
        {name: "Cameroon"},
        {name: "Cape Verde"},
        {name: "Central African Republic"},
        {name: "Chad"},
        {name: "Chile"},
        {name: "China"},
        {name: "Colombia"},
        {name: "Comoros"},
        {name: "Congo"},
        {name: "Congo Democratic Republic"},
        {name: "Costa Rica"},
        {name: "Cote d'Ivoire"},
        {name: "Croatia"},
        {name: "Cuba"},
        {name: "Cyprus"},
        {name: "Djibouti"},
        {name: "Dominica"},
        {name: "Dominican Republic"},
        {name: "Ecuador"},
        {name: "East Timor"},
        {name: "Egypt"},
        {name: "El Salvador"},
        {name: "Equatorial Guinea"},
        {name: "Eritrea"},
        {name: "Estonia"},
        {name: "Ethiopia"},
        {name: "Fiji"},
        {name: "Finland"},
        {name: "Gabon"},
        {name: "Gambia"},
        {name: "Georgia"},
        {name: "Ghana"},
        {name: "Grenada"},
        {name: "Guatemala"},
        {name: "Guinea"},
        {name: "Guinea-Bissau"},
        {name: "Guyana"},
        {name: "Haiti"},
        {name: "Honduras"},
        {name: "Hong Kong"},
        {name: "Hungary"},
        {name: "Iceland"},
        {name: "India"},
        {name: "Indonesia"},
        {name: "Iran"},
        {name: "Iraq"},
        {name: "Ireland"},
        {name: "Israel"},
        {name: "Jamaica"},
        {name: "Japan"},
        {name: "Jordan"},
        {name: "Kazakhstan"},
        {name: "Kenya"},
        {name: "Kiribati"},
        {name: "Kosovo"},
        {name: "Kuwait"},
        {name: "Kyrgyzstan"},
        {name: "Laos"},
        {name: "Latvia"},
        {name: "Lebanon"},
        {name: "Lesotho"},
        {name: "Liberia"},
        {name: "Libya"},
        {name: "Liechtenstein"},
        {name: "Lithuania"},
        {name: "Luxembourg"},
        {name: "Macedonia"},
        {name: "Madagascar"},
        {name: "Malawi"},
        {name: "Malaysia"},
        {name: "Maldives"},
        {name: "Mali"},
        {name: "Malta"},
        {name: "Marshall Islands"},
        {name: "Mauritania"},
        {name: "Mauritius"},
        {name: "Mexico"},
        {name: "Micronesia"},
        {name: "Moldova"},
        {name: "Monaco"},
        {name: "Mongolia"},
        {name: "Montenegro"},
        {name: "Morocco"},
        {name: "Mozambique"},
        {name: "Myanmar (Burma)"},
        {name: "Namibia"},
        {name: "Nauru"},
        {name: "Nepal"},
        {name: "The Netherlands"},
        {name: "New Zealand"},
        {name: "Nicaragua"},
        {name: "Niger"},
        {name: "Nigeria"},
        {name: "North Korea"},
        {name: "Norway"},
        {name: "Oman"},
        {name: "Pakistan"},
        {name: "Palau"},
        {name: "Palestinian State*"},
        {name: "Panama"},
        {name: "Papua New Guinea"},
        {name: "Paraguay"},
        {name: "Peru"},
        {name: "The Philippines"},
        {name: "Poland"},
        {name: "Portugal"},
        {name: "Qatar"},
        {name: "Rwanda"},
        {name: "St. Kitts & Nevis"},
        {name: "St. Lucia"},
        {name: "St. Vincent & The Grenadines"},
        {name: "Samoa"},
        {name: "San Marino"},
        {name: "Sao Tome & Principe"},
        {name: "Saudi Arabia"},
        {name: "Senegal"},
        {name: "Serbia"},
        {name: "Seychelles"},
        {name: "Sierra Leone"},
        {name: "Singapore"},
        {name: "Slovakia"},
        {name: "Slovenia"},
        {name: "Solomon Islands"},
        {name: "Somalia"},
        {name: "South Africa"},
        {name: "South Korea"},
        {name: "South Sudan"},
        {name: "Sri Lanka"},
        {name: "Sudan"},
        {name: "Suriname"},
        {name: "Swaziland"},
        {name: "Syria"},
        {name: "Taiwan"},
        {name: "Tajikistan"},
        {name: "Tanzania"},
        {name: "Thailand"},
        {name: "Togo"},
        {name: "Tonga"},
        {name: "Trinidad & Tobago"},
        {name: "Tunisia"},
        {name: "Turkmenistan"},
        {name: "Tuvalu"},
        {name: "Uganda"},
        {name: "United Arab Emirates"},
        {name: "Uruguay"},
        {name: "Uzbekistan"},
        {name: "Vanuatu"},
        {name: "Vatican City (Holy See)"},
        {name: "Venezuela"},
        {name: "Vietnam"},
        {name: "Yemen"},
        {name: "Zambia"},
        {name: "Zimbabwe"}
      ];
    },
    industries: function(){
      return [
        {name: "Automotive"},
        {name: "Business Services"},
        {name: "Education"},
        {name: "Financial Services"},
        {name: "Health Services"},
        {name: "Hospitality"},
        {name: "Manufacturing"},
        {name: "Real Estate Development"},
        {name: "Retail"},
        {name: "Software/Internet"},
        {name: "Telecommunications"},
        {name: "Other"},
      ];
    },
    company_size: function(){
      return [
        {name: "1-1,999"},
        {name: "2,000-9,999"},
        {name: "10,000-99,999"},
        {name: "100,000-299,999"},
        {name: "300,000+"},
      ];
    }
  });
}
