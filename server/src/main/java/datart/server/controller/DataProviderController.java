package datart.server.controller;

import datart.core.data.provider.DataProviderSource;
import datart.server.base.dto.ResponseData;
import datart.server.service.DataProviderService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api
@RestController
@RequestMapping(value = "/data-provider")
public class DataProviderController extends  BaseController {

    private final DataProviderService dataProviderService;

    public DataProviderController(DataProviderService dataProviderService) {
        this.dataProviderService = dataProviderService;
    }



    @ApiOperation(value = "Test data source connection")
    @PostMapping(value = "/test")
    public ResponseData<Object> testConnection(@RequestBody DataProviderSource config) throws Exception {
        return ResponseData.success(dataProviderService.testConnection(config));
    }



}
