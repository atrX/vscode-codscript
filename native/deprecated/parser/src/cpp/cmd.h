#pragma once
#include "arg.h"
#include "util/llist.h"

typedef int (*cmd_func_t)(int argc, char** argv);

class Command : public Argument, public LList<Command>
{
private:
	static Command* g_cmds;
	cmd_func_t func;
	
public:

	Command(const char* name, const char* description, cmd_func_t func);
	
	int Exec(int argc, char** argv) const;
	
	static Command* GlobalCommands(void);
	static Command* ResolveCommand(const char* str);
};

#define REGISTER_GLOBAL_COMMAND(IDENTIFIER) extern Command IDENTIFIER;

REGISTER_GLOBAL_COMMAND(g_cmd_help);
REGISTER_GLOBAL_COMMAND(g_cmd_tree);
REGISTER_GLOBAL_COMMAND(g_cmd_symbols);

#undef REGISTER_GLOBAL_COMMAND
