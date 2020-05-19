import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  constructor() { }

  getTeamMembersSummary():any[] {
    return [
      {Region:"East",TeamMembersCount:"20",TemporarilyUnaivalableMembers:"4"},
      {Region:"West",TeamMembersCount:"15",TemporarilyUnaivalableMembers:"8"},
      {Region:"South",TeamMembersCount:"17",TemporarilyUnaivalableMembers:"1"},
      {Region:"North",TeamMembersCount:"15",TemporarilyUnaivalableMembers:"6"}
    ];
  }

  getTeamMembers():any[]{
    return [
      {
        Region:"East",Members:[{Id: 1,Name:"Johnny",Status:"Available"},{Id: 2,Name:"Kieran",Status:"Available"},{Id: 3,Name:"Mannuel",Status:"Available"}]
      },
      {
        Region:"West",Members:[{Id: 1,Name:"Satya",Status:"Available"},{Id: 2,Name:"Deepak",Status:"Available"},{Id: 3,Name:"Vikas",Status:"Available"}]
      },
      {
        Region:"South",Members:[{Id: 1,Name:"Danny",Status:"Available"},{Id: 2,Name:"EL Jordi",Status:"Available"},{Id: 3,Name:"charles",Status:"Available"}]
      },
      {
        Region:"North",Members:[{Id: 1,Name:"Alina",Status:"Available"},{Id: 2,Name:"Kendra",Status:"Available"},{Id: 3,Name:"Kajal",Status:"Available"}]
      }
    ];
  }
}

