
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
            return appFetch(`/api/data/projects/`);
        },
        project(slug:string){
            return appFetch(`/api/data/projects/${slug}/`);
        },
        reviews(){
            return appFetch(`/api/data/reviews/`);
        },
    }

}
