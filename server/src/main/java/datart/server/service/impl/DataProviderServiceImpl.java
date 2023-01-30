package datart.server.service.impl;


import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import datart.core.base.consts.Const;
import datart.core.data.provider.DataProviderManager;
import datart.core.data.provider.DataProviderSource;
import datart.security.util.AESUtil;
import datart.server.service.BaseService;
import datart.server.service.DataProviderService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.PostConstruct;
import java.util.Map;

@Slf4j
@Service
public class DataProviderServiceImpl extends BaseService implements DataProviderService {

    // build in variables
    private static final String VARIABLE_NAME = "DATART_USER_NAME";

    private static final String VARIABLE_USERNAME = "DATART_USER_USERNAME";

    private static final String VARIABLE_EMAIL = "DATART_USER_EMAIL";

    private static final String VARIABLE_ID = "DATART_USER_ID";

    private static final String SERVER_AGGREGATE = "serverAggregate";

    private ObjectMapper objectMapper;

    private final DataProviderManager dataProviderManager;


    public DataProviderServiceImpl(DataProviderManager dataProviderManager) {
        this.dataProviderManager = dataProviderManager;
    }

    @PostConstruct
    public void init() {
        objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    }


    @Override
    public Object testConnection(DataProviderSource source) throws Exception {
        Map<String, Object> properties = source.getProperties();
        if (!CollectionUtils.isEmpty(properties)) {
            for (String key : properties.keySet()) {
                Object val = properties.get(key);
                if (val instanceof String) {
                    properties.put(key, decryptValue(val.toString()));
                }
            }
        }
        return dataProviderManager.testConnection(source);
    }




    @Override
    public String decryptValue(String value) {
        if (StringUtils.isEmpty(value)) {
            return value;
        }
        if (!value.startsWith(Const.ENCRYPT_FLAG)) {
            return value;
        }
        try {
            return AESUtil.decrypt(value.replaceFirst(Const.ENCRYPT_FLAG, ""));
        } catch (Exception e) {
            return value;
        }
    }


}

