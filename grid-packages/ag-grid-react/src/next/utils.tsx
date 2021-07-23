export const classesList = (...list: (string | null | undefined)[]): string => {
    const filtered = list.filter( s => s != null && s !== '');

    return filtered.join(' ');
}

export class CssClasses {

    private classesMap: {[name: string]: boolean} = {};

    public setClass(className: string, on: boolean): CssClasses {
        // important to not make a copy if nothing has changed, so react
        // won't trigger a render cycle on new object instance
        const nothingHasChanged = !!this.classesMap[className] == on;
        if (nothingHasChanged) { return this; }

        const res = new CssClasses();
        res.classesMap = {...this.classesMap};
        res.classesMap[className] = on;
        return res;
    }

    public toString(): string {
        const res = Object.keys(this.classesMap).filter( key => this.classesMap[key] ).join(' ');
        return res;
    }

}