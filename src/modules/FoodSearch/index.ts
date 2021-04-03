
import wiki, { Page } from 'wikijs';
import { FoodItem } from './interfaces';
const w = wiki({ apiUrl: 'https://es.wikipedia.org/w/api.php' });

class FoodSearch {
    private search: string;
    private food: FoodItem = {
        name: '',
        image: '',
        description: '',
        valid: false
    };
    private categories: string[] = [];
    constructor(search: string) {
        this.search = search;
    }
    /** Verify if the item searched is food or not, may be improved */
    async check(page: Page, summary: string) {
        const cat = await page.categories();
        this.categories = cat;
        const f = cat.find(el => el.includes('Gastronomía')) !== undefined;
        this.food.valid = f;
        if (!this.food.valid) {
            const l = summary.toLowerCase()
            this.food.valid = l.includes("un alimento") || l.includes("una fruta") || l.includes("una comida");
        }
    }

    get = () => {
        if (this.food.valid) {
            return this.food;
        } else {
            throw Error(`${this.food.name} no es comida\n${this.categories.join('\n')}`);
        }
    }

    truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    setGoogleImage = async () => {

    }

    set = async () => {
        await w.search(this.search).then(async (data) => {
            const res = data.results[0]
            const page = await w.page(res);
            this.food.name = res;
            const summary = await page.summary();
            await this.check(page, summary)
            if (this.food.valid) {
                const rawImages = await page.rawImages();
                console.log("PAGE", rawImages);
                const images = await page.images();
                const fImage = rawImages.find(el => el.title && el.title.toLocaleLowerCase().includes(this.food.name.toLowerCase()))
                if (fImage !== undefined) {
                    const info = fImage;
                    this.food.image = (info.imageinfo[0] as any).url;
                } else {
                    const imgObj = rawImages.find(el => el.title.toLowerCase().includes(".jpg") || el.title.toLowerCase().includes(".png"));
                    if (imgObj !== undefined) {
                        const info = imgObj;
                        this.food.image = (info.imageinfo[0] as any).url;
                    }
                }
                this.food.description = this.truncateString(summary, 500);
                await this.setGoogleImage();
            }

        })
    }
}

export default FoodSearch;