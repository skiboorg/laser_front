
export function createBlankRepository(appFetch: typeof $fetch){

    return {
        services(index:boolean = false){
            return appFetch(`/api/data/services/?index=${index}`);
        },
        service(slug:string){
            return appFetch(`/api/data/services/${slug}/`);
        },
        equipments(index:boolean = false){
            return appFetch(`/api/data/equipment/`);
        },
        equipment(slug:string){
            return appFetch(`/api/data/equipment/${slug}/`);
        },
        projects(index:boolean = false){
            return appFetch(`/api/data/projects/?index=${index}`);
        },
        project(slug:string){
            return appFetch(`/api/data/projects/${slug}/`);
        },
        reviews(){
            return appFetch(`/api/data/reviews/`);
        },
        team(){
            return appFetch(`/api/data/team/`);
        },
        news(index:boolean = false){
            return appFetch(`/api/data/news/?index=${index}`);
        },
        news_item(slug){
            return appFetch(`/api/data/news/${slug}/`);
        },
    }

}
