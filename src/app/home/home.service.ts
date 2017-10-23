
export interface team {
    name : string;
    path : string;
}
export class HomeService{
    getTeamNames():team[]{
        return [{name:"TEAM A",path:"/team-one"},{name:"TEAM B",path:"/team-two"},{name:"TEAM C",path:"/team-three"},{name:"TEAM D",path:"/team-four"},{name:"TEAM E",path:"/team-five"}] 
    }
}