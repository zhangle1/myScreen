package datart.server.service;

import datart.core.data.provider.DataProviderSource;

public interface DataProviderService {

    Object testConnection(DataProviderSource source) throws Exception;

    String decryptValue(String value);
}
