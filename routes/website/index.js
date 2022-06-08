const router = require('express').Router();
const controller = require('./controller');
const { authenticateToken, authenticateThirdPartyToken } = require('../../middlewares/jwt');
const { 
    CreateWebsiteValidator, 
    GetWebsiteValidator,
    GetWebsitesValidator,
    UpdateWebsiteValidator,
    DeleteWebsiteValidator,
    UpdateExpirationValidator,
    UpdateTemplateValidator
} = require('../../middlewares/validators');

router.post('/create', authenticateThirdPartyToken, CreateWebsiteValidator, controller.createWebsite);
router.get('/get', GetWebsiteValidator, controller.getWebsite);
router.get('/getMany', authenticateToken, GetWebsitesValidator, controller.getWebsites);
router.put('/update', authenticateToken, UpdateWebsiteValidator, controller.updateWebsite);
router.delete('/delete', authenticateToken, DeleteWebsiteValidator, controller.deleteWebsite);
router.patch('/updateExpiration', authenticateToken, UpdateExpirationValidator, controller.updateExpiration);
router.patch('/updateTemplate', authenticateToken, UpdateTemplateValidator, controller.updateTemplate);

module.exports = router;