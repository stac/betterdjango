var api = {
{% for version, version_list in api.items %}
'{{ version }}' : { {% include "api/apidef.js" with entry=version_list %} },{% endfor %}
};
