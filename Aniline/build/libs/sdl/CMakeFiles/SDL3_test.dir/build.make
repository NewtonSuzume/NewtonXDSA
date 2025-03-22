# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.31

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /opt/homebrew/bin/cmake

# The command to remove a file.
RM = /opt/homebrew/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build

# Include any dependencies generated for this target.
include libs/sdl/CMakeFiles/SDL3_test.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.make

# Include the progress variables for this target.
include libs/sdl/CMakeFiles/SDL3_test.dir/progress.make

# Include the compile flags for this target's objects.
include libs/sdl/CMakeFiles/SDL3_test.dir/flags.make

libs/sdl/CMakeFiles/SDL3_test.dir/codegen:
.PHONY : libs/sdl/CMakeFiles/SDL3_test.dir/codegen

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_assert.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_assert.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_assert.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_assert.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_common.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_common.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_common.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_common.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_compare.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_compare.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_compare.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_compare.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_crc32.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_crc32.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_crc32.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_crc32.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_font.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_font.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_font.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_font.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_fuzzer.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_fuzzer.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_fuzzer.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_fuzzer.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_harness.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_harness.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_harness.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_harness.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_log.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_log.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_log.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_log.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_md5.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_9) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_md5.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_md5.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_md5.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.s

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/flags.make
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o: /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_memory.c
libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o: libs/sdl/CMakeFiles/SDL3_test.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_10) "Building C object libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o -MF CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o.d -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o -c /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_memory.c

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.i"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_memory.c > CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.i

libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.s"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && /usr/bin/clang $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl/src/test/SDL_test_memory.c -o CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.s

# Object files for target SDL3_test
SDL3_test_OBJECTS = \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o" \
"CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o"

# External object files for target SDL3_test
SDL3_test_EXTERNAL_OBJECTS =

libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_assert.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_common.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_compare.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_crc32.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_font.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_fuzzer.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_harness.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_log.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_md5.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/src/test/SDL_test_memory.c.o
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/build.make
libs/sdl/libSDL3_test.a: libs/sdl/CMakeFiles/SDL3_test.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=/Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_11) "Linking C static library libSDL3_test.a"
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && $(CMAKE_COMMAND) -P CMakeFiles/SDL3_test.dir/cmake_clean_target.cmake
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/SDL3_test.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
libs/sdl/CMakeFiles/SDL3_test.dir/build: libs/sdl/libSDL3_test.a
.PHONY : libs/sdl/CMakeFiles/SDL3_test.dir/build

libs/sdl/CMakeFiles/SDL3_test.dir/clean:
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl && $(CMAKE_COMMAND) -P CMakeFiles/SDL3_test.dir/cmake_clean.cmake
.PHONY : libs/sdl/CMakeFiles/SDL3_test.dir/clean

libs/sdl/CMakeFiles/SDL3_test.dir/depend:
	cd /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/libs/sdl /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl /Users/aryant/Projects/Robotics/NewtonXDSA/Aniline/build/libs/sdl/CMakeFiles/SDL3_test.dir/DependInfo.cmake "--color=$(COLOR)"
.PHONY : libs/sdl/CMakeFiles/SDL3_test.dir/depend

