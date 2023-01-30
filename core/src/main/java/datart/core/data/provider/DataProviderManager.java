package datart.core.data.provider;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Set;

public interface DataProviderManager {

    List<DataProviderInfo> getSupportedDataProviders();

    DataProviderConfigTemplate getSourceConfigTemplate(String type) throws IOException;

    Object testConnection(DataProviderSource source) throws Exception;

    Set<String> readAllDatabases(DataProviderSource source) throws SQLException;

    Set<String> readTables(DataProviderSource source, String database) throws SQLException;

    Set<Column> readTableColumns(DataProviderSource source, String schema, String table) throws SQLException;

    Dataframe execute(DataProviderSource source, QueryScript queryScript, ExecuteParam param) throws Exception;

    Set<StdSqlOperator> supportedStdFunctions(DataProviderSource source);

    boolean validateFunction(DataProviderSource source, String snippet);

    void updateSource(DataProviderSource source);
}
