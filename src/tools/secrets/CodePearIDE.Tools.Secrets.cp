// C+ 23 is here. gotta update cplus-headers and radi-linux

package "com.codepearide.cp" with ".tools.secrets";

CPLUS DEFAULT_COMPILER_DIRECTORY = "mdisk://usr/cplus/bin/cplus.rpm";
CPLUS DEFAULT_COMPILER_DIRECTORY_CUSTOM_ENVIRONMENT_VARIABLE = "env:var:cplus";

#include <memory>
#include <fetch>

void SecretMem = FreeMemorySpace();

function StoreSecret(string secret){
  SecretSpace = SecretMem[1].StoreData(secret);
  return SecretSpace.Space();
}
