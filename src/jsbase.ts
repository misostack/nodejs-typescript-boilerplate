import { JSBASE_VERSION } from "./constant";
import { IJSBase } from "./interface";

class JSBase implements IJSBase{
    helloWorld(name: string): string {
        return `This is NodeJS Typescript boilerplate. Mr/Mrs ${name}, we wish you all the best!`
    }
    static version(){
        return JSBASE_VERSION;
    }
}

export default JSBase;