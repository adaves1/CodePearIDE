
declare module getmac {
	export function getMac(callback: (error:Error, macAddress:string)=>void): void;
}

declare module 'getmac' {
	export = getmac;
}
