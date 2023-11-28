import request from '@/utils/request'

export default{
    getAuditList(searchModel){
        return request({
            url: '/audit/list',
            method: 'get',
            params:{
                pageNo: searchModel.pageNo,
                pageSize: searchModel.pageSize,
                // filmName: searchModel.filmName,
                // userName: searchModel.userName,
                status: searchModel.status
            }
        });
    },
    
    getAuditById(auditId){
        return request({
            url: `/audit/${auditId}`,
            method: 'get',
          });
    },
    
    auditFilm(auditForm){
        return request({
            url: '/audit',
            method: 'put', 
            data: auditForm,
        });
    }
    

}