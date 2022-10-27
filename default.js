import { data } from "./constants/data.js";
import News from "./model/newsSchema.js";

const DefaultData = async () => {
    try {
        // await News.deleteMany({});
        await News.insertMany(data);
        console.log('Data imported Successfully');
    } catch(error){
        console.log('Error ', error.message);
    }
}

export default DefaultData;