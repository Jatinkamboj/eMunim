import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

import { Input, Table, Label, Dropdown } from "semantic-ui-react";
import { Button } from "react-bootstrap";
import "../App.css";
var dataJSON = {
  AD: { countryName: "Andorra", currency: "EUR", symbol: "€" },
  AE: {
    countryName: "United Arab Emirates",
    currency: "AED",
    symbol: "AED",
    dateFormat: "dd/MM/yyyy",
  },
  AF: { countryName: "Afghanistan", currency: "AFN", symbol: "Af" },
  AG: { countryName: "Antigua and Barbuda", currency: "XCD", symbol: "XCD" },
  AI: { countryName: "Anguilla", currency: "XCD", symbol: "XCD" },
  AL: {
    countryName: "Albania",
    currency: "ALL",
    symbol: "ALL",
    dateFormat: "yyyy-MM-dd",
  },
  AM: { countryName: "Armenia", currency: "AMD", symbol: "AMD" },
  AO: { countryName: "Angola", currency: "AOA", symbol: "AOA" },
  AR: {
    countryName: "Argentina",
    currency: "ARS",
    symbol: "AR$",
    dateFormat: "dd/MM/yyyy",
  },
  AS: { countryName: "American Samoa", currency: "USD", symbol: "$" },
  AT: {
    countryName: "Austria",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd.MM.yyyy",
  },
  AU: {
    countryName: "Australia",
    currency: "AUD",
    symbol: "AU$",
    dateFormat: "d/MM/yyyy",
  },
  AW: { countryName: "Aruba", currency: "AWG", symbol: "AWG" },
  AX: { countryName: "Aland Islands", currency: "EUR", symbol: "€" },
  AZ: { countryName: "Azerbaijan", currency: "AZN", symbol: "man." },
  BA: {
    countryName: "Bosnia and Herzegovina",
    currency: "BAM",
    symbol: "KM",
    dateFormat: "yyyy-MM-dd",
  },
  BB: { countryName: "Barbados", currency: "BBD", symbol: "BBD" },
  BD: { countryName: "Bangladesh", currency: "BDT", symbol: "Tk" },
  BE: {
    countryName: "Belgium",
    currency: "EUR",
    symbol: "€",
    dateFormat: "d/MM/yyyy",
  },
  BF: { countryName: "Burkina Faso", currency: "XOF", symbol: "CFA" },
  BG: {
    countryName: "Bulgaria",
    currency: "BGN",
    symbol: "BGN",
    dateFormat: "yyyy-M-d",
  },
  BH: {
    countryName: "Bahrain",
    currency: "BHD",
    symbol: "BD",
    dateFormat: "dd/MM/yyyy",
  },
  BI: { countryName: "Burundi", currency: "BIF", symbol: "FBu" },
  BJ: { countryName: "Benin", currency: "XOF", symbol: "CFA" },
  BL: { countryName: "Saint Barthelemy", currency: "EUR", symbol: "€" },
  BM: { countryName: "Bermuda", currency: "BMD", symbol: "BMD" },
  BN: { countryName: "Brunei", currency: "BND", symbol: "BN$" },
  BO: {
    countryName: "Bolivia",
    currency: "BOB",
    symbol: "Bs",
    dateFormat: "dd-MM-yyyy",
  },
  BQ: {
    countryName: "Bonaire, Saint Eustatius and Saba ",
    currency: "USD",
    symbol: "$",
  },
  BR: {
    countryName: "Brazil",
    currency: "BRL",
    symbol: "R$",
    dateFormat: "dd/MM/yyyy",
  },
  BS: { countryName: "Bahamas", currency: "BSD", symbol: "BSD" },
  BT: { countryName: "Bhutan", currency: "BTN", symbol: "BTN" },
  BV: { countryName: "Bouvet Island", currency: "NOK", symbol: "Nkr" },
  BW: { countryName: "Botswana", currency: "BWP", symbol: "BWP" },
  BY: {
    countryName: "Belarus",
    currency: "BYN",
    symbol: "BYN",
    dateFormat: "d.M.yyyy",
  },
  BZ: { countryName: "Belize", currency: "BZD", symbol: "BZ$" },
  CA: {
    countryName: "Canada",
    currency: "CAD",
    symbol: "CA$",
    dateFormat: "dd/MM/yyyy",
  },
  CC: { countryName: "Cocos Islands", currency: "AUD", symbol: "AU$" },
  CD: {
    countryName: "Democratic Republic of the Congo",
    currency: "CDF",
    symbol: "CDF",
  },
  CF: {
    countryName: "Central African Republic",
    currency: "XAF",
    symbol: "FCFA",
  },
  CG: { countryName: "Republic of the Congo", currency: "XAF", symbol: "FCFA" },
  CH: {
    countryName: "Switzerland",
    currency: "CHF",
    symbol: "CHF",
    dateFormat: "dd.MM.yyyy",
  },
  CI: { countryName: "Ivory Coast", currency: "XOF", symbol: "CFA" },
  CK: { countryName: "Cook Islands", currency: "NZD", symbol: "NZ$" },
  CL: {
    countryName: "Chile",
    currency: "CLP",
    symbol: "CL$",
    dateFormat: "dd-MM-yyyy",
  },
  CM: { countryName: "Cameroon", currency: "XAF", symbol: "FCFA" },
  CN: {
    countryName: "China",
    currency: "CNY",
    symbol: "CN¥",
    dateFormat: "yyyy-M-d",
  },
  CO: {
    countryName: "Colombia",
    currency: "COP",
    symbol: "CO$",
    dateFormat: "d/MM/yyyy",
  },
  CR: {
    countryName: "Costa Rica",
    currency: "CRC",
    symbol: "₡",
    dateFormat: "dd/MM/yyyy",
  },
  CU: { countryName: "Cuba", currency: "CUP", symbol: "CUP" },
  CV: { countryName: "Cape Verde", currency: "CVE", symbol: "CV$" },
  CW: { countryName: "Curacao", currency: "ANG", symbol: "ANG" },
  CX: { countryName: "Christmas Island", currency: "AUD", symbol: "AU$" },
  CY: {
    countryName: "Cyprus",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd/MM/yyyy",
  },
  CZ: {
    countryName: "Czech Republic",
    currency: "CZK",
    symbol: "Kč",
    dateFormat: "d.M.yyyy",
  },
  DE: {
    countryName: "Germany",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd.MM.yyyy",
  },
  DJ: { countryName: "Djibouti", currency: "DJF", symbol: "Fdj" },
  DK: {
    countryName: "Denmark",
    currency: "DKK",
    symbol: "Dkr",
    dateFormat: "dd-MM-yyyy",
  },
  DM: { countryName: "Dominica", currency: "XCD", symbol: "XCD" },
  DO: {
    countryName: "Dominican Republic",
    currency: "DOP",
    symbol: "RD$",
    dateFormat: "MM/dd/yyyy",
  },
  DZ: {
    countryName: "Algeria",
    currency: "DZD",
    symbol: "DA",
    dateFormat: "dd/MM/yyyy",
  },
  EC: {
    countryName: "Ecuador",
    currency: "USD",
    symbol: "$",
    dateFormat: "dd/MM/yyyy",
  },
  EE: {
    countryName: "Estonia",
    currency: "EUR",
    symbol: "€",
    dateFormat: "d.MM.yyyy",
  },
  EG: {
    countryName: "Egypt",
    currency: "EGP",
    symbol: "EGP",
    dateFormat: "dd/MM/yyyy",
  },
  EH: { countryName: "Western Sahara", currency: "MAD", symbol: "MAD" },
  ER: { countryName: "Eritrea", currency: "ERN", symbol: "Nfk" },
  ES: {
    countryName: "Spain",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd/MM/yyyy",
  },
  ET: { countryName: "Ethiopia", currency: "ETB", symbol: "Br" },
  FI: {
    countryName: "Finland",
    currency: "EUR",
    symbol: "€",
    dateFormat: "d.M.yyyy",
  },
  FJ: { countryName: "Fiji", currency: "FJD", symbol: "FJD" },
  FK: { countryName: "Falkland Islands", currency: "FKP", symbol: "FKP" },
  FM: { countryName: "Micronesia", currency: "USD", symbol: "$" },
  FO: { countryName: "Faroe Islands", currency: "DKK", symbol: "Dkr" },
  FR: {
    countryName: "France",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd/MM/yyyy",
  },
  GA: { countryName: "Gabon", currency: "XAF", symbol: "FCFA" },
  GB: {
    countryName: "United Kingdom",
    currency: "GBP",
    symbol: "£",
    dateFormat: "dd/MM/yyyy",
  },
  GD: { countryName: "Grenada", currency: "XCD", symbol: "XCD" },
  GE: { countryName: "Georgia", currency: "GEL", symbol: "GEL" },
  GF: { countryName: "French Guiana", currency: "EUR", symbol: "€" },
  GG: { countryName: "Guernsey", currency: "GBP", symbol: "£" },
  GH: { countryName: "Ghana", currency: "GHS", symbol: "GH₵" },
  GI: { countryName: "Gibraltar", currency: "GIP", symbol: "GIP" },
  GL: { countryName: "Greenland", currency: "DKK", symbol: "Dkr" },
  GM: { countryName: "Gambia", currency: "GMD", symbol: "GMD" },
  GN: { countryName: "Guinea", currency: "GNF", symbol: "FG" },
  GP: { countryName: "Guadeloupe", currency: "EUR", symbol: "€" },
  GQ: { countryName: "Equatorial Guinea", currency: "XAF", symbol: "FCFA" },
  GR: {
    countryName: "Greece",
    currency: "EUR",
    symbol: "€",
    dateFormat: "d/M/yyyy",
  },
  GS: {
    countryName: "South Georgia and the South Sandwich Islands",
    currency: "GBP",
    symbol: "£",
  },
  GT: {
    countryName: "Guatemala",
    currency: "GTQ",
    symbol: "GTQ",
    dateFormat: "d/MM/yyyy",
  },
  GU: { countryName: "Guam", currency: "USD", symbol: "$" },
  GW: { countryName: "Guinea-Bissau", currency: "XOF", symbol: "CFA" },
  GY: { countryName: "Guyana", currency: "GYD", symbol: "GYD" },
  HK: {
    countryName: "Hong Kong",
    currency: "HKD",
    symbol: "HK$",
    dateFormat: "yyyy年M月d日",
  },
  HM: {
    countryName: "Heard Island and McDonald Islands",
    currency: "AUD",
    symbol: "AU$",
  },
  HN: {
    countryName: "Honduras",
    currency: "HNL",
    symbol: "HNL",
    dateFormat: "MM-dd-yyyy",
  },
  HR: {
    countryName: "Croatia",
    currency: "HRK",
    symbol: "kn",
    dateFormat: "dd.MM.yyyy.",
  },
  HT: { countryName: "Haiti", currency: "HTG", symbol: "HTG" },
  HU: {
    countryName: "Hungary",
    currency: "HUF",
    symbol: "Ft",
    dateFormat: "yyyy.MM.dd.",
  },
  ID: {
    countryName: "Indonesia",
    currency: "IDR",
    symbol: "Rp",
    dateFormat: "dd/MM/yyyy",
  },
  IE: {
    countryName: "Ireland",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd/MM/yyyy",
  },
  IL: {
    countryName: "Israel",
    currency: "ILS",
    symbol: "₪",
    dateFormat: "dd/MM/yyyy",
  },
  IM: { countryName: "Isle of Man", currency: "GBP", symbol: "£" },
  IN: {
    countryName: "India",
    currency: "INR",
    symbol: "Rs",
    dateFormat: "d/M/yyyy",
  },
  IO: {
    countryName: "British Indian Ocean Territory",
    currency: "USD",
    symbol: "$",
  },
  IQ: {
    countryName: "Iraq",
    currency: "IQD",
    symbol: "IQD",
    dateFormat: "dd/MM/yyyy",
  },
  IR: { countryName: "Iran", currency: "IRR", symbol: "IRR" },
  IS: {
    countryName: "Iceland",
    currency: "ISK",
    symbol: "Ikr",
    dateFormat: "d.M.yyyy",
  },
  IT: {
    countryName: "Italy",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd/MM/yyyy",
  },
  JE: { countryName: "Jersey", currency: "GBP", symbol: "£" },
  JM: { countryName: "Jamaica", currency: "JMD", symbol: "J$" },
  JO: {
    countryName: "Jordan",
    currency: "JOD",
    symbol: "JD",
    dateFormat: "dd/MM/yyyy",
  },
  JP: {
    countryName: "Japan",
    currency: "JPY",
    symbol: "¥",
    dateFormat: "H24.MM.dd",
  },
  KE: { countryName: "Kenya", currency: "KES", symbol: "Ksh" },
  KG: { countryName: "Kyrgyzstan", currency: "KGS", symbol: "KGS" },
  KH: { countryName: "Cambodia", currency: "KHR", symbol: "KHR" },
  KI: { countryName: "Kiribati", currency: "AUD", symbol: "AU$" },
  KM: { countryName: "Comoros", currency: "KMF", symbol: "CF" },
  KN: { countryName: "Saint Kitts and Nevis", currency: "XCD", symbol: "XCD" },
  KP: { countryName: "North Korea", currency: "KPW", symbol: "KPW" },
  KR: {
    countryName: "South Korea",
    currency: "KRW",
    symbol: "₩",
    dateFormat: "yyyy. M. d",
  },
  KW: {
    countryName: "Kuwait",
    currency: "KWD",
    symbol: "KD",
    dateFormat: "dd/MM/yyyy",
  },
  KY: { countryName: "Cayman Islands", currency: "KYD", symbol: "KYD" },
  KZ: { countryName: "Kazakhstan", currency: "KZT", symbol: "KZT" },
  LA: { countryName: "Laos", currency: "LAK", symbol: "LAK" },
  LB: {
    countryName: "Lebanon",
    currency: "LBP",
    symbol: "LB£",
    dateFormat: "dd/MM/yyyy",
  },
  LC: { countryName: "Saint Lucia", currency: "XCD", symbol: "XCD" },
  LI: { countryName: "Liechtenstein", currency: "CHF", symbol: "CHF" },
  LK: { countryName: "Sri Lanka", currency: "LKR", symbol: "SLRs" },
  LR: { countryName: "Liberia", currency: "LRD", symbol: "LRD" },
  LS: { countryName: "Lesotho", currency: "LSL", symbol: "LSL" },
  LT: {
    countryName: "Lithuania",
    currency: "EUR",
    symbol: "€",
    dateFormat: "yyyy.M.d",
  },
  LU: {
    countryName: "Luxembourg",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd.MM.yyyy",
  },
  LV: {
    countryName: "Latvia",
    currency: "EUR",
    symbol: "€",
    dateFormat: "yyyy.d.M",
  },
  LY: {
    countryName: "Libya",
    currency: "LYD",
    symbol: "LD",
    dateFormat: "dd/MM/yyyy",
  },
  MA: {
    countryName: "Morocco",
    currency: "MAD",
    symbol: "MAD",
    dateFormat: "dd/MM/yyyy",
  },
  MC: { countryName: "Monaco", currency: "EUR", symbol: "€" },
  MD: { countryName: "Moldova", currency: "MDL", symbol: "MDL" },
  ME: {
    countryName: "Montenegro",
    currency: "EUR",
    symbol: "€",
    dateFormat: "d.M.yyyy.",
  },
  MF: { countryName: "Saint Martin", currency: "EUR", symbol: "€" },
  MG: { countryName: "Madagascar", currency: "MGA", symbol: "MGA" },
  MH: { countryName: "Marshall Islands", currency: "USD", symbol: "$" },
  MK: {
    countryName: "Macedonia",
    currency: "MKD",
    symbol: "MKD",
    dateFormat: "d.M.yyyy",
  },
  ML: { countryName: "Mali", currency: "XOF", symbol: "CFA" },
  MM: { countryName: "Myanmar", currency: "MMK", symbol: "MMK" },
  MN: { countryName: "Mongolia", currency: "MNT", symbol: "MNT" },
  MO: { countryName: "Macao", currency: "MOP", symbol: "MOP$" },
  MP: { countryName: "Northern Mariana Islands", currency: "USD", symbol: "$" },
  MQ: { countryName: "Martinique", currency: "EUR", symbol: "€" },
  MR: { countryName: "Mauritania", currency: "MRU", symbol: "MRU" },
  MS: { countryName: "Montserrat", currency: "XCD", symbol: "XCD" },
  MT: {
    countryName: "Malta",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd/MM/yyyy",
  },
  MU: { countryName: "Mauritius", currency: "MUR", symbol: "MURs" },
  MV: { countryName: "Maldives", currency: "MVR", symbol: "MVR" },
  MW: { countryName: "Malawi", currency: "MWK", symbol: "MWK" },
  MX: {
    countryName: "Mexico",
    currency: "MXN",
    symbol: "MX$",
    dateFormat: "d/MM/yyyy",
  },
  MY: {
    countryName: "Malaysia",
    currency: "MYR",
    symbol: "RM",
    dateFormat: "dd/MM/yyyy",
  },
  MZ: { countryName: "Mozambique", currency: "MZN", symbol: "MTn" },
  NA: { countryName: "Namibia", currency: "NAD", symbol: "N$" },
  NC: { countryName: "New Caledonia", currency: "XPF", symbol: "XPF" },
  NE: { countryName: "Niger", currency: "XOF", symbol: "CFA" },
  NF: { countryName: "Norfolk Island", currency: "AUD", symbol: "AU$" },
  NG: { countryName: "Nigeria", currency: "NGN", symbol: "₦" },
  NI: {
    countryName: "Nicaragua",
    currency: "NIO",
    symbol: "C$",
    dateFormat: "MM-dd-yyyy",
  },
  NL: {
    countryName: "Netherlands",
    currency: "EUR",
    symbol: "€",
    dateFormat: "d-M-yyyy",
  },
  NO: {
    countryName: "Norway",
    currency: "NOK",
    symbol: "Nkr",
    dateFormat: "dd.MM.yyyy",
  },
  NP: { countryName: "Nepal", currency: "NPR", symbol: "NPRs" },
  NR: { countryName: "Nauru", currency: "AUD", symbol: "AU$" },
  NU: { countryName: "Niue", currency: "NZD", symbol: "NZ$" },
  NZ: {
    countryName: "New Zealand",
    currency: "NZD",
    symbol: "NZ$",
    dateFormat: "d/MM/yyyy",
  },
  OM: {
    countryName: "Oman",
    currency: "OMR",
    symbol: "OMR",
    dateFormat: "dd/MM/yyyy",
  },
  PA: {
    countryName: "Panama",
    currency: "PAB",
    symbol: "B/.",
    dateFormat: "MM/dd/yyyy",
  },
  PE: {
    countryName: "Peru",
    currency: "PEN",
    symbol: "S/.",
    dateFormat: "dd/MM/yyyy",
  },
  PF: { countryName: "French Polynesia", currency: "XPF", symbol: "XPF" },
  PG: { countryName: "Papua New Guinea", currency: "PGK", symbol: "PGK" },
  PH: {
    countryName: "Philippines",
    currency: "PHP",
    symbol: "₱",
    dateFormat: "M/d/yyyy",
  },
  PK: { countryName: "Pakistan", currency: "PKR", symbol: "PKRs" },
  PL: {
    countryName: "Poland",
    currency: "PLN",
    symbol: "zł",
    dateFormat: "dd.MM.yyyy",
  },
  PM: {
    countryName: "Saint Pierre and Miquelon",
    currency: "EUR",
    symbol: "€",
  },
  PN: { countryName: "Pitcairn", currency: "NZD", symbol: "NZ$" },
  PR: {
    countryName: "Puerto Rico",
    currency: "USD",
    symbol: "$",
    dateFormat: "MM-dd-yyyy",
  },
  PS: { countryName: "Palestinian Territory", currency: "ILS", symbol: "₪" },
  PT: {
    countryName: "Portugal",
    currency: "EUR",
    symbol: "€",
    dateFormat: "dd-MM-yyyy",
  },
  PW: { countryName: "Palau", currency: "USD", symbol: "$" },
  PY: {
    countryName: "Paraguay",
    currency: "PYG",
    symbol: "₲",
    dateFormat: "dd/MM/yyyy",
  },
  QA: {
    countryName: "Qatar",
    currency: "QAR",
    symbol: "QR",
    dateFormat: "dd/MM/yyyy",
  },
  RE: { countryName: "Reunion", currency: "EUR", symbol: "€" },
  RO: {
    countryName: "Romania",
    currency: "RON",
    symbol: "RON",
    dateFormat: "dd.MM.yyyy",
  },
  RS: {
    countryName: "Serbia",
    currency: "RSD",
    symbol: "din.",
    dateFormat: "d.M.yyyy.",
  },
  RU: {
    countryName: "Russia",
    currency: "RUB",
    symbol: "RUB",
    dateFormat: "dd.MM.yyyy",
  },
  RW: { countryName: "Rwanda", currency: "RWF", symbol: "RWF" },
  SA: {
    countryName: "Saudi Arabia",
    currency: "SAR",
    symbol: "SR",
    dateFormat: "dd/MM/yyyy",
  },
  SB: { countryName: "Solomon Islands", currency: "SBD", symbol: "SBD" },
  SC: { countryName: "Seychelles", currency: "SCR", symbol: "SCR" },
  SD: {
    countryName: "Sudan",
    currency: "SDG",
    symbol: "SDG",
    dateFormat: "dd/MM/yyyy",
  },
  SE: {
    countryName: "Sweden",
    currency: "SEK",
    symbol: "Skr",
    dateFormat: "yyyy-MM-dd",
  },
  SG: {
    countryName: "Singapore",
    currency: "SGD",
    symbol: "S$",
    dateFormat: "M/d/yyyy",
  },
  SH: { countryName: "Saint Helena", currency: "SHP", symbol: "SHP" },
  SI: {
    countryName: "Slovenia",
    currency: "EUR",
    symbol: "€",
    dateFormat: "d.M.yyyy",
  },
  SJ: { countryName: "Svalbard and Jan Mayen", currency: "NOK", symbol: "Nkr" },
  SK: {
    countryName: "Slovakia",
    currency: "EUR",
    symbol: "€",
    dateFormat: "d.M.yyyy",
  },
  SL: { countryName: "Sierra Leone", currency: "SLL", symbol: "SLL" },
  SM: { countryName: "San Marino", currency: "EUR", symbol: "€" },
  SN: { countryName: "Senegal", currency: "XOF", symbol: "CFA" },
  SO: { countryName: "Somalia", currency: "SOS", symbol: "Ssh" },
  SR: { countryName: "Suriname", currency: "SRD", symbol: "SRD" },
  SS: { countryName: "South Sudan", currency: "SSP", symbol: "SSP" },
  ST: { countryName: "Sao Tome and Principe", currency: "STD", symbol: "STD" },
  SV: {
    countryName: "El Salvador",
    currency: "USD",
    symbol: "$",
    dateFormat: "MM-dd-yyyy",
  },
  SX: { countryName: "Sint Maarten", currency: "ANG", symbol: "ANG" },
  SY: {
    countryName: "Syria",
    currency: "SYP",
    symbol: "SY£",
    dateFormat: "dd/MM/yyyy",
  },
  SZ: { countryName: "Swaziland", currency: "SZL", symbol: "SZL" },
  TC: { countryName: "Turks and Caicos Islands", currency: "USD", symbol: "$" },
  TD: { countryName: "Chad", currency: "XAF", symbol: "FCFA" },
  TF: {
    countryName: "French Southern Territories",
    currency: "EUR",
    symbol: "€",
  },
  TG: { countryName: "Togo", currency: "XOF", symbol: "CFA" },
  TH: {
    countryName: "Thailand",
    currency: "THB",
    symbol: "฿",
    dateFormat: "๓/๖/๒๕๕๕",
  },
  TJ: { countryName: "Tajikistan", currency: "TJS", symbol: "TJS" },
  TK: { countryName: "Tokelau", currency: "NZD", symbol: "NZ$" },
  TL: { countryName: "East Timor", currency: "USD", symbol: "$" },
  TM: { countryName: "Turkmenistan", currency: "TMT", symbol: "TMT" },
  TN: {
    countryName: "Tunisia",
    currency: "TND",
    symbol: "DT",
    dateFormat: "dd/MM/yyyy",
  },
  TO: { countryName: "Tonga", currency: "TOP", symbol: "T$" },
  TR: {
    countryName: "Turkey",
    currency: "TRY",
    symbol: "TL",
    dateFormat: "dd.MM.yyyy",
  },
  TT: { countryName: "Trinidad and Tobago", currency: "TTD", symbol: "TT$" },
  TV: { countryName: "Tuvalu", currency: "AUD", symbol: "AU$" },
  TW: {
    countryName: "Taiwan",
    currency: "TWD",
    symbol: "NT$",
    dateFormat: "yyyy/M/d",
  },
  TZ: { countryName: "Tanzania", currency: "TZS", symbol: "TSh" },
  UA: {
    countryName: "Ukraine",
    currency: "UAH",
    symbol: "₴",
    dateFormat: "dd.MM.yyyy",
  },
  UG: { countryName: "Uganda", currency: "UGX", symbol: "USh" },
  UM: {
    countryName: "United States Minor Outlying Islands",
    currency: "USD",
    symbol: "$",
  },
  US: {
    countryName: "United States",
    currency: "USD",
    symbol: "$",
    dateFormat: "M/d/yyyy",
  },
  UY: {
    countryName: "Uruguay",
    currency: "UYU",
    symbol: "$U",
    dateFormat: "dd/MM/yyyy",
  },
  UZ: { countryName: "Uzbekistan", currency: "UZS", symbol: "UZS" },
  VA: { countryName: "Vatican", currency: "EUR", symbol: "€" },
  VC: {
    countryName: "Saint Vincent and the Grenadines",
    currency: "XCD",
    symbol: "XCD",
  },
  VE: {
    countryName: "Venezuela",
    currency: "VEF",
    symbol: "Bs.F.",
    dateFormat: "dd/MM/yyyy",
  },
  VG: { countryName: "British Virgin Islands", currency: "USD", symbol: "$" },
  VI: { countryName: "U.S. Virgin Islands", currency: "USD", symbol: "$" },
  VN: {
    countryName: "Vietnam",
    currency: "VND",
    symbol: "₫",
    dateFormat: "dd/MM/yyyy",
  },
  VU: { countryName: "Vanuatu", currency: "VUV", symbol: "VUV" },
  WF: { countryName: "Wallis and Futuna", currency: "XPF", symbol: "XPF" },
  WS: { countryName: "Samoa", currency: "WST", symbol: "WST" },
  XK: { countryName: "Kosovo", currency: "EUR", symbol: "€" },
  YE: {
    countryName: "Yemen",
    currency: "YER",
    symbol: "YR",
    dateFormat: "dd/MM/yyyy",
  },
  YT: { countryName: "Mayotte", currency: "EUR", symbol: "€" },
  ZA: {
    countryName: "South Africa",
    currency: "ZAR",
    symbol: "R",
    dateFormat: "yyyy/MM/dd",
  },
  ZM: { countryName: "Zambia", currency: "ZMW", symbol: "ZK" },
  ZW: { countryName: "Zimbabwe", currency: "ZWL", symbol: "ZWL" },
};
function CurrencyExchange() {
  const [table, setTable] = useState(false);
  const [value, setValue] = useState("");
  const [valueTarget, setValueTarget] = useState("");
  const [amount, setAmount] = useState();
  const [result, setResult] = useState(0);
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const options = useMemo(() => countryList().getData(), []);
  const get = async (from, to) => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "CaBFJZnD8sMIM4UBY3U1GUGE423t2KU3");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    console.log("on");
    await fetch(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=1`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setResult(result["result"]);
      })
      .catch((error) => console.log("error", error));
    console.log("off");
  };
  const changeHandler = (value) => {
    setValue(value);
  };
  const changeHandlerTarget = (value) => {
    setValueTarget(value);
  };

  const convert = async () => {
    let from = dataJSON[value.value].currency;
    let to = dataJSON[valueTarget.value].currency;
    setFrom(from);
    setTo(to);
    console.log(dataJSON[value.value].currency);
    console.log(dataJSON[valueTarget.value].currency);

    await get(from, to);
    console.log(result);
    setTable(true);
  };
  return (
    <>
      <div className="container">
        <h2 className="heading">Currency Exchange</h2>
        <br></br>

        <div className="fields">
          <div style={{ marginLeft: "31%"}}>
            <Label ribbon size="large">
              From
            </Label>
          </div>
          <div className="dropdown_from">
            <div style={{ width:"300px"}}>
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
              />
            </div>
            <Input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Amount"
              style={{ marginLeft: "3%" }}
            ></Input>
          </div>

          <div style={{ marginLeft: "31%" }}>
            <Label ribbon size="large">
              To
            </Label>
          </div>
          <div className="dropdown_to">
            <div style={{ width:"300px",marginRight:"17%"}}>
              <Select
                options={options}
                value={valueTarget}
                onChange={changeHandlerTarget}
              />
            </div>
          </div>
          <div style={{ marginLeft: "43%", marginBottom: "2%" }}>
            <Button
              size="lg"
              onClick={convert}
              variant="primary"
              style={{ marginRight: "2%" }}
            >
              Convert Currency
            </Button>
          </div>
        </div>
        {table && (
          <div className="table_container">
            <Table compact celled definition textAlign="center">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{ border: "none" }} />
                  <Table.HeaderCell>{from}</Table.HeaderCell>
                  <Table.HeaderCell>{to}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>{from}</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>{result}</Table.Cell> 
                </Table.Row>
                <Table.Row>
                  <Table.Cell>{to}</Table.Cell>
                  <Table.Cell>{1/(result)}</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Result</Table.Cell>
                  <Table.Cell>{amount}</Table.Cell>
                  <Table.Cell>{amount*result}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}

export default CurrencyExchange;
