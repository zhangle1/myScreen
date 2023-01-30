package datart.core.data.provider;


import lombok.Data;
import lombok.ToString;

import java.util.List;
import java.util.Map;

@Data
@ToString
public class DataProviderSource {

    private String sourceId;

    private String type;

    private String name;

    private Map<String, Object> properties;

    private List<ScriptVariable> variables;

}
