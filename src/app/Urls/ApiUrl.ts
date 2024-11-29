// const baseUrl = 'https://alora-yst7j.ondigitalocean.app/api/v1/';
// const baseUrl = 'https://alora-plus.vercel.app/api/v1/';
// const baseUrl = 'http://192.168.1.231:5000/';
import { environment } from "src/environments/environment";

const baseUrl = environment.mainapi;

export const superAdminEndPoints = {
    superAdminLogin: `${baseUrl}login`,
    createusers: `${baseUrl}createuser`,
    getsidebar: `${baseUrl}sidebars`,
    SidebarByID: `${baseUrl}sidebar_details/`,
    SidebarByIDs: `${baseUrl}sidebarbyid/`,
    editpasswords: `${baseUrl}editpassword/`,
     


    SubSidebarByID: `${baseUrl}subsidebar_details/`,
    updateSidebar: `${baseUrl}sidebar`,
    getSubMenu: `${baseUrl}subsidebars`,
    getUsers: `${baseUrl}users`,
    getRoomUsers: `${baseUrl}users/`,
    getRoomClients: `${baseUrl}clients/`,
    getclients: `${baseUrl}client`,
    getClientss: `${baseUrl}client`,
    createclient: `${baseUrl}createclient`,
    routines: `${baseUrl}routine`,

    notes: `${baseUrl}note`,
    roomnotes: `${baseUrl}roomnotes`,

    addTask: `${baseUrl}task`,
    addstatus: `${baseUrl}status`,
    getmedicine: `${baseUrl}medicine`,
    gertmilestones: `${baseUrl}milestone_details`,
    gertmilestonesBYClientId: `${baseUrl}milestone_details/`,
    createmilestoness: `${baseUrl}createmilestone`,
    rooms: `${baseUrl}room`,
    createRooms: `${baseUrl}createroom`,
    getUsersByid: `${baseUrl}users_details/`,
    Usersupdate: `${baseUrl}editUser/`,
    Userstatusupdate: `${baseUrl}activateUser/`,
    InstatusStatusupdate: `${baseUrl}statusupdate/`,
    statusUpdtedGetById: `${baseUrl}status_details/`,
    statusUpdtedput: `${baseUrl}status/`,
    allactiveststus: `${baseUrl}activestatus`,
    frequencys: `${baseUrl}frequency`,
    uinitsdatas: `${baseUrl}unit`,
    uinitsdataspost: `${baseUrl}unit`,
    postfacesheet: `${baseUrl}facesheet`,
    facesheetgetbyis: `${baseUrl}facesheet/`,


    userroomnotesdetailss: `${baseUrl}userroomnotesdetails/`,

    taskbyuserids :`${baseUrl}taskbyuserid/`,

    // timesdata: `${baseUrl}times`,


    clientstatusupdatess: `${baseUrl}activateUser/`,
    getLanguagess: `${baseUrl}get_language`,
    changeLanguage: `${baseUrl}change_language?lang=`,
    userDetailsForRoom: `${baseUrl}userdata/`,
    roomDetails: `${baseUrl}room_details/`,
    comment: `${baseUrl}comment`,
    logo: `${baseUrl}setting/`,
    roomactivity: `${baseUrl}roomactivity`,
    commentactivity: `${baseUrl}commentactivity`,
    medicineactivity: `${baseUrl}medicineactivity`,
    milestoneactivity: `${baseUrl}milestoneactivity`,
    taskactivity: `${baseUrl}taskactivity`,
    statusactivity: `${baseUrl}statusactivity`,
    settingactivity: `${baseUrl}settingactivity`,
    sidebarpermissionByid: `${baseUrl}sidebarpermission`,
    groupidchangeByid: `${baseUrl}users_group/`,
   



    //1
    unitactivity: `${baseUrl}unitactivity`,
    frequencyactivity: `${baseUrl}frequencyactivity`,


    tranportationGet: `${baseUrl}transportations`,
    tranportation: `${baseUrl}transportation`,
    workAndCarrierGet: `${baseUrl}workandcareerandeducations`,
    workAndCarrier: `${baseUrl}workandcareerandeducation`,
    communicationAndsocialGet: `${baseUrl}communicationandsociainvolvements`,
    addCommunicationAndsocial: `${baseUrl}communicationandsociainvolvement`,
    communicationGet: `${baseUrl}communications`,
    addCommunication: `${baseUrl}communication`,
    selfHomeCareGet: `${baseUrl}selfhomecares`,
    addSelfHomeCare: `${baseUrl}selfhomecare`,
    currentMedicationGet: `${baseUrl}currentmedications`,
    currentMedication: `${baseUrl}currentmedication`,
    dental: `${baseUrl}dental`,
    dentalGet: `${baseUrl}dentals`,
    epsdtr: `${baseUrl}epsdtr`,
    epsdtrsGet: `${baseUrl}epsdtrs`,
    healthmedical: `${baseUrl}healthmedical`,
    healthmedicalGet: `${baseUrl}healthmedicals`,
    saftey: `${baseUrl}saftey`,
    safteysGet: `${baseUrl}safteys`,
    personalGrowth: `${baseUrl}personalandemotinalgrowth`,
    personalGrowthGet: `${baseUrl}personalandemotinalgrowths`,
    currentProviderAdd: `${baseUrl}currentprovider`,
    currentProviderGet: `${baseUrl}currentproviders`,
    graphCount: `${baseUrl}overview`,
    getNotification:`${baseUrl}notification_details/`,
    addAppointment:`${baseUrl}appoitment`,
    getAppointment:`${baseUrl}appoitments`,
    Theme:`${baseUrl}themes`,
    notification:`${baseUrl}notification`,
    residentNote:`${baseUrl}note`,
}
