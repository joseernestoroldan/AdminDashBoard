const paramsString = "q=URLUtils.searchParams&topic=api";

const searchParams = new URLSearchParams(paramsString);

for(const p of searchParams){
    console.log(p)
}