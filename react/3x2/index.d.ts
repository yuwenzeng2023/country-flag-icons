import * as React from 'react';

// https://stackoverflow.com/questions/63165896/what-is-the-type-of-the-svg-element-in-typescript
// https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelement.html
// https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.svgelement.html
interface HTMLSVGElement extends HTMLElement, SVGElement {}

// https://use-form.netlify.app/interfaces/_node_modules__types_react_index_d_.react.htmlattributes.html
// https://use-form.netlify.app/interfaces/_node_modules__types_react_index_d_.react.svgattributes.html
interface ElementAttributes<T> extends React.HTMLAttributes<T>, React.SVGAttributes<T> {}

interface Props extends ElementAttributes<HTMLSVGElement> {}

// React TypeScript Cheatsheet doesn't recommend using React.FunctionalComponent.
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
// declare const ReactTimeAgo: React.FC<Props>;

type FlagComponent = (props: Props) => JSX.Element;

export const AC: FlagComponent
export const AD: FlagComponent
export const AE: FlagComponent
export const AF: FlagComponent
export const AG: FlagComponent
export const AI: FlagComponent
export const AL: FlagComponent
export const AM: FlagComponent
export const AO: FlagComponent
export const AQ: FlagComponent
export const AR: FlagComponent
export const AS: FlagComponent
export const AT: FlagComponent
export const AU: FlagComponent
export const AW: FlagComponent
export const AX: FlagComponent
export const AZ: FlagComponent
export const BA: FlagComponent
export const BB: FlagComponent
export const BD: FlagComponent
export const BE: FlagComponent
export const BF: FlagComponent
export const BG: FlagComponent
export const BH: FlagComponent
export const BI: FlagComponent
export const BJ: FlagComponent
export const BL: FlagComponent
export const BM: FlagComponent
export const BN: FlagComponent
export const BO: FlagComponent
export const BQ: FlagComponent
export const BR: FlagComponent
export const BS: FlagComponent
export const BT: FlagComponent
export const BV: FlagComponent
export const BW: FlagComponent
export const BY: FlagComponent
export const BZ: FlagComponent
export const CA: FlagComponent
export const CC: FlagComponent
export const CD: FlagComponent
export const CF: FlagComponent
export const CG: FlagComponent
export const CH: FlagComponent
export const CI: FlagComponent
export const CK: FlagComponent
export const CL: FlagComponent
export const CM: FlagComponent
export const CN: FlagComponent
export const CO: FlagComponent
export const CR: FlagComponent
export const CU: FlagComponent
export const CV: FlagComponent
export const CW: FlagComponent
export const CX: FlagComponent
export const CY: FlagComponent
export const CZ: FlagComponent
export const DE: FlagComponent
export const DJ: FlagComponent
export const DK: FlagComponent
export const DM: FlagComponent
export const DO: FlagComponent
export const DZ: FlagComponent
export const EC: FlagComponent
export const EE: FlagComponent
export const EG: FlagComponent
export const EH: FlagComponent
export const ER: FlagComponent
export const ES: FlagComponent
export const ET: FlagComponent
export const EU: FlagComponent
export const FI: FlagComponent
export const FJ: FlagComponent
export const FK: FlagComponent
export const FM: FlagComponent
export const FO: FlagComponent
export const FR: FlagComponent
export const GA: FlagComponent
export const GB: FlagComponent
export const GD: FlagComponent
export const GE: FlagComponent
export const GF: FlagComponent
export const GG: FlagComponent
export const GH: FlagComponent
export const GI: FlagComponent
export const GL: FlagComponent
export const GM: FlagComponent
export const GN: FlagComponent
export const GP: FlagComponent
export const GQ: FlagComponent
export const GR: FlagComponent
export const GS: FlagComponent
export const GT: FlagComponent
export const GU: FlagComponent
export const GW: FlagComponent
export const GY: FlagComponent
export const HK: FlagComponent
export const HM: FlagComponent
export const HN: FlagComponent
export const HR: FlagComponent
export const HT: FlagComponent
export const HU: FlagComponent
export const IC: FlagComponent
export const ID: FlagComponent
export const IE: FlagComponent
export const IL: FlagComponent
export const IM: FlagComponent
export const IN: FlagComponent
export const IO: FlagComponent
export const IQ: FlagComponent
export const IR: FlagComponent
export const IS: FlagComponent
export const IT: FlagComponent
export const JE: FlagComponent
export const JM: FlagComponent
export const JO: FlagComponent
export const JP: FlagComponent
export const KE: FlagComponent
export const KG: FlagComponent
export const KH: FlagComponent
export const KI: FlagComponent
export const KM: FlagComponent
export const KN: FlagComponent
export const KP: FlagComponent
export const KR: FlagComponent
export const KW: FlagComponent
export const KY: FlagComponent
export const KZ: FlagComponent
export const LA: FlagComponent
export const LB: FlagComponent
export const LC: FlagComponent
export const LI: FlagComponent
export const LK: FlagComponent
export const LR: FlagComponent
export const LS: FlagComponent
export const LT: FlagComponent
export const LU: FlagComponent
export const LV: FlagComponent
export const LY: FlagComponent
export const MA: FlagComponent
export const MC: FlagComponent
export const MD: FlagComponent
export const ME: FlagComponent
export const MF: FlagComponent
export const MG: FlagComponent
export const MH: FlagComponent
export const MK: FlagComponent
export const ML: FlagComponent
export const MM: FlagComponent
export const MN: FlagComponent
export const MO: FlagComponent
export const MP: FlagComponent
export const MQ: FlagComponent
export const MR: FlagComponent
export const MS: FlagComponent
export const MT: FlagComponent
export const MU: FlagComponent
export const MV: FlagComponent
export const MW: FlagComponent
export const MX: FlagComponent
export const MY: FlagComponent
export const MZ: FlagComponent
export const NA: FlagComponent
export const NC: FlagComponent
export const NE: FlagComponent
export const NF: FlagComponent
export const NG: FlagComponent
export const NI: FlagComponent
export const NL: FlagComponent
export const NO: FlagComponent
export const NP: FlagComponent
export const NR: FlagComponent
export const NU: FlagComponent
export const NZ: FlagComponent
export const OM: FlagComponent
export const PA: FlagComponent
export const PE: FlagComponent
export const PF: FlagComponent
export const PG: FlagComponent
export const PH: FlagComponent
export const PK: FlagComponent
export const PL: FlagComponent
export const PM: FlagComponent
export const PN: FlagComponent
export const PR: FlagComponent
export const PS: FlagComponent
export const PT: FlagComponent
export const PW: FlagComponent
export const PY: FlagComponent
export const QA: FlagComponent
export const RE: FlagComponent
export const RO: FlagComponent
export const RS: FlagComponent
export const RU: FlagComponent
export const RW: FlagComponent
export const SA: FlagComponent
export const SB: FlagComponent
export const SC: FlagComponent
export const SD: FlagComponent
export const SE: FlagComponent
export const SG: FlagComponent
export const SH: FlagComponent
export const SI: FlagComponent
export const SJ: FlagComponent
export const SK: FlagComponent
export const SL: FlagComponent
export const SM: FlagComponent
export const SN: FlagComponent
export const SO: FlagComponent
export const SR: FlagComponent
export const SS: FlagComponent
export const ST: FlagComponent
export const SV: FlagComponent
export const SX: FlagComponent
export const SY: FlagComponent
export const SZ: FlagComponent
export const TA: FlagComponent
export const TC: FlagComponent
export const TD: FlagComponent
export const TF: FlagComponent
export const TG: FlagComponent
export const TH: FlagComponent
export const TJ: FlagComponent
export const TK: FlagComponent
export const TL: FlagComponent
export const TM: FlagComponent
export const TN: FlagComponent
export const TO: FlagComponent
export const TR: FlagComponent
export const TT: FlagComponent
export const TV: FlagComponent
export const TW: FlagComponent
export const TZ: FlagComponent
export const UA: FlagComponent
export const UG: FlagComponent
export const UM: FlagComponent
export const US: FlagComponent
export const UY: FlagComponent
export const UZ: FlagComponent
export const VA: FlagComponent
export const VC: FlagComponent
export const VE: FlagComponent
export const VG: FlagComponent
export const VI: FlagComponent
export const VN: FlagComponent
export const VU: FlagComponent
export const WF: FlagComponent
export const WS: FlagComponent
export const XK: FlagComponent
export const YE: FlagComponent
export const YT: FlagComponent
export const ZA: FlagComponent
export const ZM: FlagComponent
export const ZW: FlagComponent