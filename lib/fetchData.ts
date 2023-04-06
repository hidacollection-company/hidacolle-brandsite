import fetch from 'node-fetch'

// 厳密な型指定
// export const fetchData = async <T>(url: string): Promise<T> => {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data as T;
// };

export const fetchData = async <T>(url: string): Promise<any> => {
    const res = await fetch(url);
    const data = await res.json();

    // console.log("============================");
    // console.log("res");
    // console.log("============================");
    // console.log(res);
    // console.log("============================");
    // console.log("data");
    // console.log("============================");
    // console.log(data);

    return data;
};