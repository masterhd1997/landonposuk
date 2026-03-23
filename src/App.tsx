import React, { useState } from 'react';
import { 
  Search, Star, User, Globe, Users, MapPin, Crosshair, 
  Car, Code, Layers, Shield, Cloud, Sun, Wind, Clock, Earth, FileCode2, Monitor, Database
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const cppCode = `#include <Windows.h>
#include <d3d11.h>
#include <imgui.h>
#include <imgui_impl_win32.h>
#include <imgui_impl_dx11.h>
#include <string>

// V-ULTIMATE V2.5 ImGui Menu Base
// Designed for Visual Studio (C++20)

namespace MenuConfig {
    bool isOpen = true;
    int selectedTab = 6; // Default to World tab
    
    // Self Tab Settings
    bool godMode = false;
    bool invisible = false;
    bool superJump = false;
    bool fastRun = true;
    bool neverWanted = true;
    bool noRagdoll = false;
    int wantedLevel = 0;

    // Lobby Tab Settings
    bool forceHost = true;
    bool playerMagnet = false;
    int lobbyTime = 12;

    // Players Tab Settings
    bool spectate = false;
    bool dropMoney = false;
    bool freeze = false;

    // Teleport Tab Settings
    int customX = 0;
    int customY = 0;
    int customZ = 0;

    // Weapons Tab Settings
    bool infiniteAmmo = true;
    bool explosiveAmmo = false;
    bool fireAmmo = false;
    bool rapidFire = true;
    bool noReload = true;
    bool aimbot = false;
    int damageMultiplier = 10;

    // World Tab Settings
    bool blackoutMode = false;
    bool riotMode = false;
    bool lowGravity = false;
    bool chaosMode = false;
    float pedDensity = 1.0f;
    float trafficDensity = 1.0f;

    // Vehicle Tab Settings
    bool vehicleGodMode = true;
    bool hornBoost = false;
    bool engineAlwaysOn = true;
    int speedMultiplier = 2;

    // Lua Tab Settings
    bool allowUnsafe = false;
    bool aimbotLua = true;
    bool espLua = true;
    bool moneyDropLua = false;

    // Misc Tab Settings
    bool antiAfk = true;
    bool fpsBoost = false;
    bool hideHud = false;
    bool freeCam = false;

    // Protection Tab Settings
    bool blockKicks = true;
    bool blockCrashes = true;
    bool blockExplosions = true;
    bool blockAttachments = true;
    bool blockReports = true;
    bool notifyOnBlock = true;

    // Recovery Tab Settings
    int moneyAmount = 1000000;
    int rankLevel = 100;
}

void ApplyCustomStyle() {
    ImGuiStyle& style = ImGui::GetStyle();
    
    // Colors matching the V-ULTIMATE V2.5 UI
    style.Colors[ImGuiCol_WindowBg] = ImVec4(0.02f, 0.02f, 0.02f, 1.00f);
    style.Colors[ImGuiCol_ChildBg] = ImVec4(0.04f, 0.04f, 0.04f, 1.00f);
    style.Colors[ImGuiCol_Border] = ImVec4(0.10f, 0.10f, 0.10f, 1.00f);
    style.Colors[ImGuiCol_FrameBg] = ImVec4(0.06f, 0.06f, 0.06f, 1.00f);
    style.Colors[ImGuiCol_FrameBgHovered] = ImVec4(0.08f, 0.08f, 0.08f, 1.00f);
    style.Colors[ImGuiCol_FrameBgActive] = ImVec4(0.10f, 0.10f, 0.10f, 1.00f);
    style.Colors[ImGuiCol_TitleBg] = ImVec4(0.02f, 0.02f, 0.02f, 1.00f);
    style.Colors[ImGuiCol_TitleBgActive] = ImVec4(0.02f, 0.02f, 0.02f, 1.00f);
    style.Colors[ImGuiCol_Text] = ImVec4(0.90f, 0.90f, 0.90f, 1.00f);
    style.Colors[ImGuiCol_TextDisabled] = ImVec4(0.50f, 0.50f, 0.50f, 1.00f);
    
    // Cyan Accents
    ImVec4 cyanAccent = ImVec4(0.00f, 0.85f, 1.00f, 1.00f);
    style.Colors[ImGuiCol_CheckMark] = cyanAccent;
    style.Colors[ImGuiCol_SliderGrab] = cyanAccent;
    style.Colors[ImGuiCol_SliderGrabActive] = ImVec4(0.00f, 0.95f, 1.00f, 1.00f);
    style.Colors[ImGuiCol_Button] = ImVec4(0.06f, 0.06f, 0.06f, 1.00f);
    style.Colors[ImGuiCol_ButtonHovered] = ImVec4(0.10f, 0.10f, 0.10f, 1.00f);
    style.Colors[ImGuiCol_ButtonActive] = cyanAccent;
    style.Colors[ImGuiCol_Header] = ImVec4(0.06f, 0.06f, 0.06f, 1.00f);
    style.Colors[ImGuiCol_HeaderHovered] = ImVec4(0.08f, 0.08f, 0.08f, 1.00f);
    style.Colors[ImGuiCol_HeaderActive] = cyanAccent;

    // Sizing & Rounding
    style.WindowRounding = 0.0f;
    style.ChildRounding = 4.0f;
    style.FrameRounding = 2.0f;
    style.GrabRounding = 2.0f;
    style.ItemSpacing = ImVec2(8, 8);
    style.WindowPadding = ImVec2(16, 16);
}

void RenderSidebar() {
    ImGui::BeginChild("Sidebar", ImVec2(200, 0), true);
    
    // Search
    static char searchBuf[64] = "";
    ImGui::InputTextWithHint("##Search", "SEARCH...", searchBuf, IM_ARRAYSIZE(searchBuf));
    ImGui::Spacing(); ImGui::Separator(); ImGui::Spacing();
    
    // Categories
    ImGui::TextDisabled("QUICK");
    if (ImGui::Selectable("Favorites", MenuConfig::selectedTab == 0)) MenuConfig::selectedTab = 0;
    
    ImGui::Spacing();
    ImGui::TextDisabled("ENTITIES");
    if (ImGui::Selectable("Self", MenuConfig::selectedTab == 1)) MenuConfig::selectedTab = 1;
    if (ImGui::Selectable("Lobby", MenuConfig::selectedTab == 2)) MenuConfig::selectedTab = 2;
    if (ImGui::Selectable("Players", MenuConfig::selectedTab == 3)) MenuConfig::selectedTab = 3;
    if (ImGui::Selectable("Teleport", MenuConfig::selectedTab == 4)) MenuConfig::selectedTab = 4;
    if (ImGui::Selectable("Weapons", MenuConfig::selectedTab == 5)) MenuConfig::selectedTab = 5;
    if (ImGui::Selectable("World", MenuConfig::selectedTab == 6)) MenuConfig::selectedTab = 6;
    if (ImGui::Selectable("Vehicle", MenuConfig::selectedTab == 7)) MenuConfig::selectedTab = 7;
    if (ImGui::Selectable("Recovery", MenuConfig::selectedTab == 11)) MenuConfig::selectedTab = 11;
    
    ImGui::Spacing();
    ImGui::TextDisabled("MISC");
    if (ImGui::Selectable("Lua", MenuConfig::selectedTab == 8)) MenuConfig::selectedTab = 8;
    if (ImGui::Selectable("Misc", MenuConfig::selectedTab == 9)) MenuConfig::selectedTab = 9;
    if (ImGui::Selectable("Protection", MenuConfig::selectedTab == 10)) MenuConfig::selectedTab = 10;
    
    ImGui::EndChild();
}

void RenderBottomStats() {
    ImGui::BeginChild("Stats", ImVec2(0, 0), true);
    ImGui::Columns(3, nullptr, false);
    
    ImGui::TextColored(ImVec4(1.0f, 0.6f, 0.0f, 1.0f), "[*]"); ImGui::SameLine();
    ImGui::TextDisabled("SOLAR INTENSITY");
    ImGui::Text("1.24 GW");
    ImGui::NextColumn();
    
    ImGui::TextColored(ImVec4(0.0f, 0.85f, 1.0f, 1.0f), "[~]"); ImGui::SameLine();
    ImGui::TextDisabled("WIND VELOCITY");
    ImGui::Text("14.2 M/S");
    ImGui::NextColumn();
    
    ImGui::TextColored(ImVec4(0.6f, 0.6f, 0.6f, 1.0f), "[O]"); ImGui::SameLine();
    ImGui::TextDisabled("TIME SCALE");
    ImGui::Text("1.00X");
    
    ImGui::Columns(1);
    ImGui::EndChild();
}

void RenderSelfTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);
    
    ImGui::Text("GOD MODE");
    ImGui::TextDisabled("PREVENTS ALL DAMAGE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##godmode", &MenuConfig::godMode);
    ImGui::Spacing();
    
    ImGui::Text("INVISIBLE");
    ImGui::TextDisabled("MAKES YOUR CHARACTER UNSEEN.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##invisible", &MenuConfig::invisible);
    ImGui::Spacing();

    ImGui::Text("SUPER JUMP");
    ImGui::TextDisabled("JUMP HIGHER THAN NORMAL.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##superjump", &MenuConfig::superJump);
    ImGui::Spacing();

    ImGui::Text("FAST RUN");
    ImGui::TextDisabled("INCREASE RUNNING SPEED.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##fastrun", &MenuConfig::fastRun);
    ImGui::Spacing();

    ImGui::Text("NEVER WANTED");
    ImGui::TextDisabled("PREVENT POLICE FROM CHASING YOU.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##neverwanted", &MenuConfig::neverWanted);
    
    ImGui::NextColumn();

    ImGui::Text("NO RAGDOLL");
    ImGui::TextDisabled("PREVENT FALLING OVER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##noragdoll", &MenuConfig::noRagdoll);
    ImGui::Spacing();

    ImGui::Text("WANTED LEVEL");
    ImGui::TextDisabled("SET CURRENT WANTED LEVEL.");
    ImGui::SliderInt("##wantedlevel", &MenuConfig::wantedLevel, 0, 5);
    ImGui::Spacing();

    ImGui::Text("MAX HEALTH/ARMOR");
    ImGui::TextDisabled("REFILL HEALTH AND ARMOR.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##health", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("CLEAN PLAYER");
    ImGui::TextDisabled("REMOVE BLOOD AND DIRT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##clean", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SUICIDE");
    ImGui::TextDisabled("KILL YOUR CHARACTER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##suicide", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    
    RenderBottomStats();
}

void RenderLobbyTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("FORCE HOST");
    ImGui::TextDisabled("BECOME LOBBY HOST.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##forcehost", &MenuConfig::forceHost);
    ImGui::Spacing();

    ImGui::Text("PLAYER MAGNET");
    ImGui::TextDisabled("ATTRACT ALL PLAYERS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##playermagnet", &MenuConfig::playerMagnet);
    ImGui::Spacing();

    ImGui::Text("CLEAR WEATHER");
    ImGui::TextDisabled("REMOVE RAIN AND CLOUDS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##weather", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SET TIME");
    ImGui::TextDisabled("CHANGE LOBBY TIME.");
    ImGui::SliderInt("##settime", &MenuConfig::lobbyTime, 0, 23);

    ImGui::NextColumn();

    ImGui::Text("KICK ALL");
    ImGui::TextDisabled("REMOVE EVERYONE FROM LOBBY.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##kickall", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("CRASH ALL");
    ImGui::TextDisabled("CRASH EVERYONE'S GAME.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##crashall", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SEND MESSAGE");
    ImGui::TextDisabled("SEND MESSAGE TO ALL.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SEND##msgall", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderPlayersTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("SPECTATE");
    ImGui::TextDisabled("WATCH SELECTED PLAYER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##spectate", &MenuConfig::spectate);
    ImGui::Spacing();

    ImGui::Text("DROP MONEY");
    ImGui::TextDisabled("GIVE MONEY TO PLAYER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##dropmoney", &MenuConfig::dropMoney);
    ImGui::Spacing();

    ImGui::Text("FREEZE");
    ImGui::TextDisabled("FREEZE PLAYER IN PLACE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##freeze", &MenuConfig::freeze);
    ImGui::Spacing();

    ImGui::Text("CAGE");
    ImGui::TextDisabled("TRAP PLAYER IN A CAGE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##cage", ImVec2(70, 0))) { }

    ImGui::NextColumn();

    ImGui::Text("EXPLODE");
    ImGui::TextDisabled("BLOW UP PLAYER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##explode", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("KICK");
    ImGui::TextDisabled("REMOVE PLAYER FROM LOBBY.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##kick", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("CRASH");
    ImGui::TextDisabled("CRASH PLAYER'S GAME.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##crash", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("GIVE WEAPONS");
    ImGui::TextDisabled("GIVE ALL WEAPONS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##giveweps", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderTeleportTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("TO WAYPOINT");
    ImGui::TextDisabled("TELEPORT TO MAP WAYPOINT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##waypoint", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("TO OBJECTIVE");
    ImGui::TextDisabled("TELEPORT TO MISSION OBJECTIVE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##objective", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SAFEHOUSE");
    ImGui::TextDisabled("TELEPORT TO APARTMENT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##safehouse", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("AIRPORT");
    ImGui::TextDisabled("TELEPORT TO LSIA.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##airport", ImVec2(70, 0))) { }

    ImGui::NextColumn();

    ImGui::Text("CUSTOM X");
    ImGui::TextDisabled("X COORDINATE.");
    ImGui::SliderInt("##customx", &MenuConfig::customX, -10000, 10000);
    ImGui::Spacing();

    ImGui::Text("CUSTOM Y");
    ImGui::TextDisabled("Y COORDINATE.");
    ImGui::SliderInt("##customy", &MenuConfig::customY, -10000, 10000);
    ImGui::Spacing();

    ImGui::Text("CUSTOM Z");
    ImGui::TextDisabled("Z COORDINATE.");
    ImGui::SliderInt("##customz", &MenuConfig::customZ, -1000, 10000);
    ImGui::Spacing();

    ImGui::Text("TELEPORT TO COORDS");
    ImGui::TextDisabled("GO TO CUSTOM LOCATION.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##coords", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderWeaponsTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("GIVE ALL WEAPONS");
    ImGui::TextDisabled("ADD ALL WEAPONS TO INVENTORY.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##giveallweps", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("INFINITE AMMO");
    ImGui::TextDisabled("NEVER RUN OUT OF AMMO.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##infammo", &MenuConfig::infiniteAmmo);
    ImGui::Spacing();

    ImGui::Text("EXPLOSIVE AMMO");
    ImGui::TextDisabled("BULLETS EXPLODE ON IMPACT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##expammo", &MenuConfig::explosiveAmmo);
    ImGui::Spacing();

    ImGui::Text("FIRE AMMO");
    ImGui::TextDisabled("BULLETS SET TARGETS ON FIRE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##fireammo", &MenuConfig::fireAmmo);

    ImGui::NextColumn();

    ImGui::Text("RAPID FIRE");
    ImGui::TextDisabled("SHOOT FASTER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##rapidfire", &MenuConfig::rapidFire);
    ImGui::Spacing();

    ImGui::Text("NO RELOAD");
    ImGui::TextDisabled("NEVER HAVE TO RELOAD.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##noreload", &MenuConfig::noReload);
    ImGui::Spacing();

    ImGui::Text("AIMBOT");
    ImGui::TextDisabled("AUTOMATICALLY AIM AT TARGETS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##aimbot", &MenuConfig::aimbot);
    ImGui::Spacing();

    ImGui::Text("DAMAGE MULTIPLIER");
    ImGui::TextDisabled("INCREASE WEAPON DAMAGE.");
    ImGui::SliderInt("##dmgmult", &MenuConfig::damageMultiplier, 1, 100);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderWorldTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true); // Leave room for bottom stats
    
    ImGui::Columns(2, nullptr, false);
    
    // --- Left Column ---
    ImGui::Text("BLACKOUT MODE");
    ImGui::TextDisabled("TURN OFF ALL CITY LIGHTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blackout", &MenuConfig::blackoutMode);
    ImGui::Spacing();
    
    ImGui::Text("RIOT MODE");
    ImGui::TextDisabled("NPCS ATTACK EACH OTHER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##riot", &MenuConfig::riotMode);
    ImGui::Spacing();
    
    ImGui::Text("LOW GRAVITY");
    ImGui::TextDisabled("REDUCE GRAVITY FOR ALL OBJECTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##gravity", &MenuConfig::lowGravity);
    ImGui::Spacing();
    
    ImGui::Text("CHAOS MODE");
    ImGui::TextDisabled("RANDOM EXPLOSIONS AND EVENTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##chaos", &MenuConfig::chaosMode);
    ImGui::Spacing();
    
    ImGui::Text("PEDESTRIAN DENSITY");
    ImGui::TextDisabled("ADJUST NPC POPULATION.");
    ImGui::SliderFloat("##ped_density", &MenuConfig::pedDensity, 0.0f, 2.0f, "%.1f");
    ImGui::Spacing();
    
    ImGui::Text("TRAFFIC DENSITY");
    ImGui::TextDisabled("ADJUST VEHICLE POPULATION.");
    ImGui::SliderFloat("##traffic_density", &MenuConfig::trafficDensity, 0.0f, 2.0f, "%.1f");
    ImGui::Spacing();
    
    ImGui::Text("CLEAR AREA");
    ImGui::TextDisabled("REMOVE PEDS AND TRAFFIC.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##clear", ImVec2(70, 0))) {
        // Execute clear area logic
    }
    
    ImGui::NextColumn();
    
    // --- Right Column ---
    ImGui::Text("SPAWN RAMP");
    ImGui::TextDisabled("PLACE A RAMP IN THE WORLD.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##ramp", ImVec2(70, 0))) { /* Spawn Ramp */ }
    ImGui::Spacing();
    
    ImGui::Text("SPAWN BUILDING");
    ImGui::TextDisabled("PLACE A BUILDING OBSTACLE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##building", ImVec2(70, 0))) { /* Spawn Building */ }
    ImGui::Spacing();
    
    ImGui::Text("SPAWN BARRIER");
    ImGui::TextDisabled("PLACE A CONCRETE BARRIER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##barrier", ImVec2(70, 0))) { /* Spawn Barrier */ }
    ImGui::Spacing();
    
    ImGui::Text("SPAWN CONTAINER");
    ImGui::TextDisabled("PLACE A SHIPPING CONTAINER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##container", ImVec2(70, 0))) { /* Spawn Container */ }
    ImGui::Spacing();
    
    ImGui::Text("SPAWN TREE");
    ImGui::TextDisabled("PLACE A DECORATIVE TREE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##tree", ImVec2(70, 0))) { /* Spawn Tree */ }
    
    ImGui::Columns(1);
    ImGui::EndChild();
    
    RenderBottomStats();
}

void RenderVehicleTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("SPAWN T20");
    ImGui::TextDisabled("SPAWN SUPERCAR.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SPAWN##t20", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SPAWN LAZER");
    ImGui::TextDisabled("SPAWN FIGHTER JET.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SPAWN##lazer", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SPAWN OPPRESSOR");
    ImGui::TextDisabled("SPAWN FLYING BIKE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SPAWN##oppressor", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("VEHICLE GOD MODE");
    ImGui::TextDisabled("PREVENT VEHICLE DAMAGE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##vehgodmode", &MenuConfig::vehicleGodMode);

    ImGui::NextColumn();

    ImGui::Text("MAX UPGRADES");
    ImGui::TextDisabled("APPLY ALL PERFORMANCE MODS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##maxupgrades", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("REPAIR VEHICLE");
    ImGui::TextDisabled("FIX ALL DAMAGE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##repairveh", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("HORN BOOST");
    ImGui::TextDisabled("BOOST FORWARD WHEN HONKING.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##hornboost", &MenuConfig::hornBoost);
    ImGui::Spacing();

    ImGui::Text("ENGINE ALWAYS ON");
    ImGui::TextDisabled("PREVENT ENGINE STALLING.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##engineon", &MenuConfig::engineAlwaysOn);
    ImGui::Spacing();

    ImGui::Text("SPEED MULTIPLIER");
    ImGui::TextDisabled("INCREASE TOP SPEED.");
    ImGui::SliderInt("##speedmult", &MenuConfig::speedMultiplier, 1, 10);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderLuaTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("LOAD SCRIPT");
    ImGui::TextDisabled("LOAD A CUSTOM LUA SCRIPT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("LOAD##loadlua", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("UNLOAD ALL");
    ImGui::TextDisabled("UNLOAD ALL ACTIVE SCRIPTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("UNLOAD##unloadlua", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("ALLOW UNSAFE");
    ImGui::TextDisabled("ALLOW SCRIPTS TO USE DANGEROUS NATIVES.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##allowunsafe", &MenuConfig::allowUnsafe);

    ImGui::NextColumn();

    ImGui::Text("AIMBOT.LUA");
    ImGui::TextDisabled("CUSTOM AIMBOT SCRIPT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##aimbotlua", &MenuConfig::aimbotLua);
    ImGui::Spacing();

    ImGui::Text("ESP.LUA");
    ImGui::TextDisabled("CUSTOM ESP SCRIPT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##esplua", &MenuConfig::espLua);
    ImGui::Spacing();

    ImGui::Text("MONEY_DROP.LUA");
    ImGui::TextDisabled("CUSTOM MONEY DROP SCRIPT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##moneydroplua", &MenuConfig::moneyDropLua);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderMiscTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("SKIP CUTSCENE");
    ImGui::TextDisabled("SKIP CURRENT CUTSCENE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##skipcutscene", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("UNLOCK ACHIEVEMENTS");
    ImGui::TextDisabled("UNLOCK ALL GAME ACHIEVEMENTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##unlockachievements", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("ANTI-AFK");
    ImGui::TextDisabled("PREVENT IDLE KICK.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##antiafk", &MenuConfig::antiAfk);

    ImGui::NextColumn();

    ImGui::Text("FPS BOOST");
    ImGui::TextDisabled("OPTIMIZE GAME FOR PERFORMANCE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##fpsboost", &MenuConfig::fpsBoost);
    ImGui::Spacing();

    ImGui::Text("HIDE HUD");
    ImGui::TextDisabled("REMOVE ALL ON-SCREEN UI.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##hidehud", &MenuConfig::hideHud);
    ImGui::Spacing();

    ImGui::Text("FREE CAM");
    ImGui::TextDisabled("DETACH CAMERA FROM PLAYER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##freecam", &MenuConfig::freeCam);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderProtectionTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("BLOCK KICKS");
    ImGui::TextDisabled("PREVENT MODDERS FROM KICKING YOU.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockkicks", &MenuConfig::blockKicks);
    ImGui::Spacing();

    ImGui::Text("BLOCK CRASHES");
    ImGui::TextDisabled("PREVENT MODDERS FROM CRASHING YOU.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockcrashes", &MenuConfig::blockCrashes);
    ImGui::Spacing();

    ImGui::Text("BLOCK EXPLOSIONS");
    ImGui::TextDisabled("PREVENT REMOTE EXPLOSIONS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockexplosions", &MenuConfig::blockExplosions);

    ImGui::NextColumn();

    ImGui::Text("BLOCK ATTACHMENTS");
    ImGui::TextDisabled("PREVENT OBJECTS FROM BEING ATTACHED.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockattachments", &MenuConfig::blockAttachments);
    ImGui::Spacing();

    ImGui::Text("BLOCK REPORTS");
    ImGui::TextDisabled("BLOCK IN-GAME REPORTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockreports", &MenuConfig::blockReports);
    ImGui::Spacing();

    ImGui::Text("NOTIFY ON BLOCK");
    ImGui::TextDisabled("SHOW NOTIFICATION WHEN BLOCKED.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##notifyonblock", &MenuConfig::notifyOnBlock);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderRecoveryTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("ADD MONEY");
    ImGui::TextDisabled("ADD CASH TO BANK.");
    ImGui::SliderInt("##moneyamount", &MenuConfig::moneyAmount, 0, 10000000);
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("ADD##money", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SET RANK");
    ImGui::TextDisabled("SET CHARACTER RANK.");
    ImGui::SliderInt("##ranklevel", &MenuConfig::rankLevel, 1, 8000);
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SET##rank", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("UNLOCK ALL");
    ImGui::TextDisabled("UNLOCK ALL ITEMS AND SKILLS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("UNLOCK##all", ImVec2(70, 0))) { }

    ImGui::NextColumn();

    ImGui::Text("MAX SKILLS");
    ImGui::TextDisabled("SET ALL SKILLS TO 100%.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##skills", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("CLEAR REPORTS");
    ImGui::TextDisabled("REMOVE ALL PLAYER REPORTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("CLEAR##reports", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderPlaceholderTab(const char* tabName) {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Text("%s settings will go here.", tabName);
    ImGui::EndChild();
    RenderBottomStats();
}

void RenderMenu() {
    if (!MenuConfig::isOpen) return;

    ApplyCustomStyle();
    
    ImGui::SetNextWindowSize(ImVec2(900, 600), ImGuiCond_FirstUseEver);
    ImGui::Begin("V-ULTIMATE V2.5", &MenuConfig::isOpen, ImGuiWindowFlags_NoTitleBar | ImGuiWindowFlags_NoCollapse);
    
    // --- Header ---
    ImGui::TextColored(ImVec4(1.0f, 1.0f, 1.0f, 1.0f), "V-ULTIMATE");
    ImGui::SameLine();
    ImGui::TextColored(ImVec4(0.0f, 0.85f, 1.0f, 1.0f), "V2.5");
    ImGui::SameLine(ImGui::GetWindowWidth() - 350);
    ImGui::TextDisabled("KERNEL MODE • 12:16:20 AM |");
    ImGui::SameLine();
    ImGui::TextColored(ImVec4(0.0f, 0.85f, 1.0f, 1.0f), "GAME VERSION: 1.72 SUPPORTED");
    
    ImGui::Separator();
    ImGui::Spacing();
    
    // --- Main Layout ---
    RenderSidebar();
    ImGui::SameLine();
    
    // Render the selected tab content
    switch (MenuConfig::selectedTab) {
        case 0: RenderPlaceholderTab("Favorites"); break;
        case 1: RenderSelfTab(); break;
        case 2: RenderLobbyTab(); break;
        case 3: RenderPlayersTab(); break;
        case 4: RenderTeleportTab(); break;
        case 5: RenderWeaponsTab(); break;
        case 6: RenderWorldTab(); break;
        case 7: RenderVehicleTab(); break;
        case 8: RenderLuaTab(); break;
        case 9: RenderMiscTab(); break;
        case 10: RenderProtectionTab(); break;
        case 11: RenderRecoveryTab(); break;
        default: RenderPlaceholderTab("Unknown"); break;
    }
    
    ImGui::End();
}

// --- DLL Entry Point (For Internal Injection) ---
DWORD WINAPI MainThread(LPVOID lpReserved) {
    // 1. Initialize MinHook or similar hooking library
    // 2. Hook DirectX11 Present (IDXGISwapChain::Present)
    // 3. Initialize ImGui in the hooked Present function
    // 4. Call RenderMenu() inside the ImGui frame
    
    while (true) {
        if (GetAsyncKeyState(VK_INSERT) & 1) {
            MenuConfig::isOpen = !MenuConfig::isOpen;
        }
        Sleep(10);
    }
    return TRUE;
}

BOOL WINAPI DllMain(HMODULE hMod, DWORD dwReason, LPVOID lpReserved) {
    if (dwReason == DLL_PROCESS_ATTACH) {
        DisableThreadLibraryCalls(hMod);
        CreateThread(nullptr, 0, MainThread, hMod, 0, nullptr);
    }
    return TRUE;
}
\`;`;

// --- UI Components ---

const ControlCard = ({ title, desc, control, active = false }: { title: string, desc: string, control: React.ReactNode, active?: boolean }) => (
  <div className={`flex justify-between items-center p-4 rounded-md bg-[#0a0a0a] border transition-colors ${active ? 'border-cyan-500/30' : 'border-white/5'}`}>
    <div className="flex flex-col">
      <span className={`text-xs font-bold uppercase tracking-wider ${active ? 'text-cyan-400' : 'text-white/80'}`}>{title}</span>
      <span className="text-[9px] text-white/40 uppercase tracking-widest mt-1">{desc}</span>
    </div>
    <div className="flex items-center">
      {control}
    </div>
  </div>
);

const Toggle = ({ active }: { active: boolean }) => (
  <div className="w-8 h-4 rounded-full bg-[#1a1a1a] border border-white/10 relative flex items-center px-0.5">
    <div className={`w-3 h-3 rounded-full bg-white transition-transform ${active ? 'translate-x-4' : 'translate-x-0'}`} />
  </div>
);

const ActionButton = ({ text }: { text: string }) => (
  <button className="px-4 py-1.5 bg-[#1a1a1a] border border-white/10 rounded text-[9px] font-bold text-white/60 uppercase tracking-widest hover:bg-white/5 transition-colors">
    {text}
  </button>
);

const Slider = ({ value }: { value: number }) => (
  <div className="flex items-center gap-3 w-32">
    <span className="text-cyan-400 text-[10px] font-bold">{value}</span>
    <div className="flex-1 h-1.5 bg-[#1a1a1a] rounded-full relative border border-white/5">
      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-3 bg-white/60 rounded-[1px]" style={{ left: '10%' }} />
    </div>
  </div>
);

const StatCard = ({ icon: Icon, title, value, iconColor }: { icon: any, title: string, value: string, iconColor: string }) => (
  <div className="flex-1 bg-[#0a0a0a] border border-white/5 rounded-md p-6 flex flex-col items-center justify-center gap-3">
    <Icon className={iconColor} size={24} />
    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">{title}</div>
    <div className="text-lg font-medium text-white/90 tracking-wider">{value}</div>
  </div>
);

// --- Main App ---

const projectFiles: Record<string, string> = {
  'favorites.h': `// favorites.h
#pragma once
#include <vector>
#include <string>

namespace Favorites {
    std::vector<std::string> favoriteFeatures;
    
    void AddToFavorites(std::string name) {
        favoriteFeatures.push_back(name);
    }
}`,
  'self.cpp': `void RenderSelfTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);
    
    ImGui::Text("GOD MODE");
    ImGui::TextDisabled("PREVENTS ALL DAMAGE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##godmode", &MenuConfig::godMode);
    ImGui::Spacing();
    
    ImGui::Text("INVISIBLE");
    ImGui::TextDisabled("MAKES YOUR CHARACTER UNSEEN.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##invisible", &MenuConfig::invisible);
    ImGui::Spacing();

    ImGui::Text("SUPER JUMP");
    ImGui::TextDisabled("JUMP HIGHER THAN NORMAL.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##superjump", &MenuConfig::superJump);
    ImGui::Spacing();

    ImGui::Text("FAST RUN");
    ImGui::TextDisabled("INCREASE RUNNING SPEED.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##fastrun", &MenuConfig::fastRun);
    ImGui::Spacing();

    ImGui::Text("NEVER WANTED");
    ImGui::TextDisabled("PREVENT POLICE FROM CHASING YOU.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##neverwanted", &MenuConfig::neverWanted);
    
    ImGui::NextColumn();

    ImGui::Text("NO RAGDOLL");
    ImGui::TextDisabled("PREVENT FALLING OVER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##noragdoll", &MenuConfig::noRagdoll);
    ImGui::Spacing();

    ImGui::Text("WANTED LEVEL");
    ImGui::TextDisabled("SET CURRENT WANTED LEVEL.");
    ImGui::SliderInt("##wantedlevel", &MenuConfig::wantedLevel, 0, 5);
    ImGui::Spacing();

    ImGui::Text("MAX HEALTH/ARMOR");
    ImGui::TextDisabled("REFILL HEALTH AND ARMOR.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##health", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("CLEAN PLAYER");
    ImGui::TextDisabled("REMOVE BLOOD AND DIRT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##clean", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SUICIDE");
    ImGui::TextDisabled("KILL YOUR CHARACTER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##suicide", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    
    RenderBottomStats();
}`,
  'lobby.cpp': `void RenderLobbyTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("FORCE HOST");
    ImGui::TextDisabled("BECOME LOBBY HOST.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##forcehost", &MenuConfig::forceHost);
    ImGui::Spacing();

    ImGui::Text("PLAYER MAGNET");
    ImGui::TextDisabled("ATTRACT ALL PLAYERS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##playermagnet", &MenuConfig::playerMagnet);
    ImGui::Spacing();

    ImGui::Text("CLEAR WEATHER");
    ImGui::TextDisabled("REMOVE RAIN AND CLOUDS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##weather", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SET TIME");
    ImGui::TextDisabled("CHANGE LOBBY TIME.");
    ImGui::SliderInt("##settime", &MenuConfig::lobbyTime, 0, 23);

    ImGui::NextColumn();

    ImGui::Text("KICK ALL");
    ImGui::TextDisabled("REMOVE EVERYONE FROM LOBBY.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##kickall", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("CRASH ALL");
    ImGui::TextDisabled("CRASH EVERYONE'S GAME.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##crashall", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SEND MESSAGE");
    ImGui::TextDisabled("SEND MESSAGE TO ALL.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SEND##msgall", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'players.cpp': `void RenderPlayersTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("SPECTATE");
    ImGui::TextDisabled("WATCH SELECTED PLAYER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##spectate", &MenuConfig::spectate);
    ImGui::Spacing();

    ImGui::Text("DROP MONEY");
    ImGui::TextDisabled("GIVE MONEY TO PLAYER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##dropmoney", &MenuConfig::dropMoney);
    ImGui::Spacing();

    ImGui::Text("FREEZE");
    ImGui::TextDisabled("FREEZE PLAYER IN PLACE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##freeze", &MenuConfig::freeze);
    ImGui::Spacing();

    ImGui::Text("CAGE");
    ImGui::TextDisabled("TRAP PLAYER IN A CAGE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##cage", ImVec2(70, 0))) { }

    ImGui::NextColumn();

    ImGui::Text("EXPLODE");
    ImGui::TextDisabled("BLOW UP PLAYER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##explode", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("KICK");
    ImGui::TextDisabled("REMOVE PLAYER FROM LOBBY.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##kick", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("CRASH");
    ImGui::TextDisabled("CRASH PLAYER'S GAME.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("EXECUTE##crash", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("GIVE WEAPONS");
    ImGui::TextDisabled("GIVE ALL WEAPONS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##giveweps", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'teleport.cpp': `void RenderTeleportTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("TO WAYPOINT");
    ImGui::TextDisabled("TELEPORT TO MAP WAYPOINT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##waypoint", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("TO OBJECTIVE");
    ImGui::TextDisabled("TELEPORT TO MISSION OBJECTIVE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##objective", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SAFEHOUSE");
    ImGui::TextDisabled("TELEPORT TO APARTMENT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##safehouse", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("AIRPORT");
    ImGui::TextDisabled("TELEPORT TO LSIA.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##airport", ImVec2(70, 0))) { }

    ImGui::NextColumn();

    ImGui::Text("CUSTOM X");
    ImGui::TextDisabled("X COORDINATE.");
    ImGui::SliderInt("##customx", &MenuConfig::customX, -10000, 10000);
    ImGui::Spacing();

    ImGui::Text("CUSTOM Y");
    ImGui::TextDisabled("Y COORDINATE.");
    ImGui::SliderInt("##customy", &MenuConfig::customY, -10000, 10000);
    ImGui::Spacing();

    ImGui::Text("CUSTOM Z");
    ImGui::TextDisabled("Z COORDINATE.");
    ImGui::SliderInt("##customz", &MenuConfig::customZ, -1000, 10000);
    ImGui::Spacing();

    ImGui::Text("TELEPORT TO COORDS");
    ImGui::TextDisabled("GO TO CUSTOM LOCATION.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("TELEPORT##coords", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'weapons.cpp': `void RenderWeaponsTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("GIVE ALL WEAPONS");
    ImGui::TextDisabled("ADD ALL WEAPONS TO INVENTORY.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##giveallweps", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("INFINITE AMMO");
    ImGui::TextDisabled("NEVER RUN OUT OF AMMO.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##infammo", &MenuConfig::infiniteAmmo);
    ImGui::Spacing();

    ImGui::Text("EXPLOSIVE AMMO");
    ImGui::TextDisabled("BULLETS EXPLODE ON IMPACT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##expammo", &MenuConfig::explosiveAmmo);
    ImGui::Spacing();

    ImGui::Text("FIRE AMMO");
    ImGui::TextDisabled("BULLETS SET TARGETS ON FIRE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##fireammo", &MenuConfig::fireAmmo);

    ImGui::NextColumn();

    ImGui::Text("RAPID FIRE");
    ImGui::TextDisabled("SHOOT FASTER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##rapidfire", &MenuConfig::rapidFire);
    ImGui::Spacing();

    ImGui::Text("NO RELOAD");
    ImGui::TextDisabled("NEVER HAVE TO RELOAD.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##noreload", &MenuConfig::noReload);
    ImGui::Spacing();

    ImGui::Text("AIMBOT");
    ImGui::TextDisabled("AUTOMATICALLY AIM AT TARGETS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##aimbot", &MenuConfig::aimbot);
    ImGui::Spacing();

    ImGui::Text("DAMAGE MULTIPLIER");
    ImGui::TextDisabled("INCREASE WEAPON DAMAGE.");
    ImGui::SliderInt("##dmgmult", &MenuConfig::damageMultiplier, 1, 100);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'world.cpp': `void RenderWorldTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);
    
    ImGui::Text("BLACKOUT MODE");
    ImGui::TextDisabled("TURN OFF ALL CITY LIGHTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blackout", &MenuConfig::blackoutMode);
    ImGui::Spacing();
    
    ImGui::Text("RIOT MODE");
    ImGui::TextDisabled("NPCS ATTACK EACH OTHER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##riot", &MenuConfig::riotMode);
    ImGui::Spacing();
    
    ImGui::Text("LOW GRAVITY");
    ImGui::TextDisabled("REDUCE GRAVITY FOR ALL OBJECTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##gravity", &MenuConfig::lowGravity);
    ImGui::Spacing();
    
    ImGui::Text("CHAOS MODE");
    ImGui::TextDisabled("RANDOM EXPLOSIONS AND EVENTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##chaos", &MenuConfig::chaosMode);
    ImGui::Spacing();
    
    ImGui::Text("PEDESTRIAN DENSITY");
    ImGui::TextDisabled("ADJUST NPC POPULATION.");
    ImGui::SliderFloat("##ped_density", &MenuConfig::pedDensity, 0.0f, 2.0f, "%.1f");
    ImGui::Spacing();
    
    ImGui::Text("TRAFFIC DENSITY");
    ImGui::TextDisabled("ADJUST VEHICLE POPULATION.");
    ImGui::SliderFloat("##traffic_density", &MenuConfig::trafficDensity, 0.0f, 2.0f, "%.1f");
    ImGui::Spacing();
    
    ImGui::Text("CLEAR AREA");
    ImGui::TextDisabled("REMOVE PEDS AND TRAFFIC.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##clear", ImVec2(70, 0))) { }
    
    ImGui::NextColumn();
    
    ImGui::Text("SPAWN RAMP");
    ImGui::TextDisabled("PLACE A RAMP IN THE WORLD.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##ramp", ImVec2(70, 0))) { }
    ImGui::Spacing();
    
    ImGui::Text("SPAWN BUILDING");
    ImGui::TextDisabled("PLACE A BUILDING OBSTACLE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##building", ImVec2(70, 0))) { }
    ImGui::Spacing();
    
    ImGui::Text("SPAWN BARRIER");
    ImGui::TextDisabled("PLACE A CONCRETE BARRIER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##barrier", ImVec2(70, 0))) { }
    ImGui::Spacing();
    
    ImGui::Text("SPAWN CONTAINER");
    ImGui::TextDisabled("PLACE A SHIPPING CONTAINER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##container", ImVec2(70, 0))) { }
    ImGui::Spacing();
    
    ImGui::Text("SPAWN TREE");
    ImGui::TextDisabled("PLACE A DECORATIVE TREE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##tree", ImVec2(70, 0))) { }
    
    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'vehicle.cpp': `void RenderVehicleTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("SPAWN T20");
    ImGui::TextDisabled("SPAWN SUPERCAR.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SPAWN##t20", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SPAWN LAZER");
    ImGui::TextDisabled("SPAWN FIGHTER JET.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SPAWN##lazer", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SPAWN OPPRESSOR");
    ImGui::TextDisabled("SPAWN FLYING BIKE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SPAWN##oppressor", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("VEHICLE GOD MODE");
    ImGui::TextDisabled("PREVENT VEHICLE DAMAGE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##vehgodmode", &MenuConfig::vehicleGodMode);

    ImGui::NextColumn();

    ImGui::Text("MAX UPGRADES");
    ImGui::TextDisabled("APPLY ALL PERFORMANCE MODS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##maxupgrades", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("REPAIR VEHICLE");
    ImGui::TextDisabled("FIX ALL DAMAGE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##repairveh", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("HORN BOOST");
    ImGui::TextDisabled("BOOST FORWARD WHEN HONKING.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##hornboost", &MenuConfig::hornBoost);
    ImGui::Spacing();

    ImGui::Text("ENGINE ALWAYS ON");
    ImGui::TextDisabled("PREVENT ENGINE STALLING.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##engineon", &MenuConfig::engineAlwaysOn);
    ImGui::Spacing();

    ImGui::Text("SPEED MULTIPLIER");
    ImGui::TextDisabled("INCREASE TOP SPEED.");
    ImGui::SliderInt("##speedmult", &MenuConfig::speedMultiplier, 1, 10);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'recovery.cpp': `void RenderRecoveryTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("ADD MONEY");
    ImGui::TextDisabled("ADD CASH TO BANK.");
    ImGui::SliderInt("##moneyamount", &MenuConfig::moneyAmount, 0, 10000000);
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("ADD##money", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("SET RANK");
    ImGui::TextDisabled("SET CHARACTER RANK.");
    ImGui::SliderInt("##ranklevel", &MenuConfig::rankLevel, 1, 8000);
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("SET##rank", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("UNLOCK ALL");
    ImGui::TextDisabled("UNLOCK ALL ITEMS AND SKILLS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("UNLOCK##all", ImVec2(70, 0))) { }

    ImGui::NextColumn();

    ImGui::Text("MAX SKILLS");
    ImGui::TextDisabled("SET ALL SKILLS TO 100%.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##skills", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("CLEAR REPORTS");
    ImGui::TextDisabled("REMOVE ALL PLAYER REPORTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("CLEAR##reports", ImVec2(70, 0))) { }

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'lua.cpp': `void RenderLuaTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("LOAD SCRIPT");
    ImGui::TextDisabled("LOAD A CUSTOM LUA SCRIPT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("LOAD##loadlua", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("UNLOAD ALL");
    ImGui::TextDisabled("UNLOAD ALL ACTIVE SCRIPTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("UNLOAD##unloadlua", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("ALLOW UNSAFE");
    ImGui::TextDisabled("ALLOW SCRIPTS TO USE DANGEROUS NATIVES.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##allowunsafe", &MenuConfig::allowUnsafe);

    ImGui::NextColumn();

    ImGui::Text("AIMBOT.LUA");
    ImGui::TextDisabled("CUSTOM AIMBOT SCRIPT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##aimbotlua", &MenuConfig::aimbotLua);
    ImGui::Spacing();

    ImGui::Text("ESP.LUA");
    ImGui::TextDisabled("CUSTOM ESP SCRIPT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##esplua", &MenuConfig::espLua);
    ImGui::Spacing();

    ImGui::Text("MONEY_DROP.LUA");
    ImGui::TextDisabled("CUSTOM MONEY DROP SCRIPT.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##moneydroplua", &MenuConfig::moneyDropLua);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'misc.cpp': `void RenderMiscTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("SKIP CUTSCENE");
    ImGui::TextDisabled("SKIP CURRENT CUTSCENE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##skipcutscene", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("UNLOCK ACHIEVEMENTS");
    ImGui::TextDisabled("UNLOCK ALL GAME ACHIEVEMENTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 80);
    if (ImGui::Button("APPLY##unlockachievements", ImVec2(70, 0))) { }
    ImGui::Spacing();

    ImGui::Text("ANTI-AFK");
    ImGui::TextDisabled("PREVENT IDLE KICK.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##antiafk", &MenuConfig::antiAfk);

    ImGui::NextColumn();

    ImGui::Text("FPS BOOST");
    ImGui::TextDisabled("OPTIMIZE GAME FOR PERFORMANCE.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##fpsboost", &MenuConfig::fpsBoost);
    ImGui::Spacing();

    ImGui::Text("HIDE HUD");
    ImGui::TextDisabled("REMOVE ALL ON-SCREEN UI.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##hidehud", &MenuConfig::hideHud);
    ImGui::Spacing();

    ImGui::Text("FREE CAM");
    ImGui::TextDisabled("DETACH CAMERA FROM PLAYER.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##freecam", &MenuConfig::freeCam);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`,
  'protection.cpp': `void RenderProtectionTab() {
    ImGui::BeginChild("Content", ImVec2(0, -80), true);
    ImGui::Columns(2, nullptr, false);

    ImGui::Text("BLOCK KICKS");
    ImGui::TextDisabled("PREVENT MODDERS FROM KICKING YOU.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockkicks", &MenuConfig::blockKicks);
    ImGui::Spacing();

    ImGui::Text("BLOCK CRASHES");
    ImGui::TextDisabled("PREVENT MODDERS FROM CRASHING YOU.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockcrashes", &MenuConfig::blockCrashes);
    ImGui::Spacing();

    ImGui::Text("BLOCK EXPLOSIONS");
    ImGui::TextDisabled("PREVENT REMOTE EXPLOSIONS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockexplosions", &MenuConfig::blockExplosions);

    ImGui::NextColumn();

    ImGui::Text("BLOCK ATTACHMENTS");
    ImGui::TextDisabled("PREVENT OBJECTS FROM BEING ATTACHED.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockattachments", &MenuConfig::blockAttachments);
    ImGui::Spacing();

    ImGui::Text("BLOCK REPORTS");
    ImGui::TextDisabled("BLOCK IN-GAME REPORTS.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##blockreports", &MenuConfig::blockReports);
    ImGui::Spacing();

    ImGui::Text("NOTIFY ON BLOCK");
    ImGui::TextDisabled("SHOW NOTIFICATION WHEN BLOCKED.");
    ImGui::SameLine(ImGui::GetColumnWidth() - 40);
    ImGui::Checkbox("##notifyonblock", &MenuConfig::notifyOnBlock);

    ImGui::Columns(1);
    ImGui::EndChild();
    RenderBottomStats();
}`
};

export default function App() {
  const [activeTab, setActiveTab] = useState('self.cpp');
  const [showCode, setShowCode] = useState(true);

  const sidebarSections = [
    {
      title: 'include/',
      items: [
        { id: 'favorites.h', icon: Star, color: 'text-amber-400' }
      ]
    },
    {
      title: 'src/',
      items: [
        { id: 'self.cpp', icon: User },
        { id: 'lobby.cpp', icon: Globe },
        { id: 'players.cpp', icon: Users },
        { id: 'teleport.cpp', icon: MapPin },
        { id: 'weapons.cpp', icon: Crosshair },
        { id: 'world.cpp', icon: Earth },
        { id: 'vehicle.cpp', icon: Car },
        { id: 'recovery.cpp', icon: Database },
      ]
    },
    {
      title: 'lib/',
      items: [
        { id: 'lua.cpp', icon: Code },
        { id: 'misc.cpp', icon: Layers },
        { id: 'protection.cpp', icon: Shield },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#d1d1d1] font-sans selection:bg-cyan-500/30 flex flex-col overflow-hidden">
      
      {/* --- Global Header --- */}
      <header className="h-24 flex items-center justify-between px-8 shrink-0 relative z-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-black italic tracking-wider text-white drop-shadow-md">
            V-ULTIMATE <span className="text-cyan-400">V2.5</span>
          </h1>
          <div className="text-[10px] text-white/40 uppercase tracking-[0.15em] mt-2 flex items-center gap-2 font-medium">
            <span>KERNEL MODE</span>
            <span className="text-white/20">•</span>
            <span>12:16:20 AM</span>
            <span className="text-white/20 mx-1">|</span>
            <span className="text-cyan-500 font-bold">GAME VERSION: 1.72 SUPPORTED</span>
          </div>
        </div>
        
        <div className="flex items-center gap-10">
          <button 
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-md text-xs font-bold text-white/80 hover:bg-white/5 transition-colors uppercase tracking-widest"
          >
            {showCode ? <Monitor size={16} /> : <FileCode2 size={16} />}
            {showCode ? 'View UI' : 'View C++ Source'}
          </button>
          
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-white/40 uppercase tracking-widest mb-1 font-bold">CLOUD SYNC</span>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
              SYNCED <Cloud size={14} />
            </span>
          </div>
          <div className="w-[1px] h-10 bg-white/5" />
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-white/40 uppercase tracking-widest mb-1 font-bold">STATUS</span>
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">UNDETECTED</span>
          </div>
        </div>
      </header>

      {/* --- Main Layout --- */}
      <div className="flex flex-1 overflow-hidden px-6 pb-6 gap-0">
        
        {/* --- Sidebar --- */}
        <aside className="w-[240px] bg-[#0a0a0a] border border-white/5 rounded-l-lg flex flex-col overflow-y-auto custom-scrollbar shrink-0 relative z-10">
          <div className="p-5">
            <div className="bg-[#111111] border border-white/5 rounded-md p-2.5 flex items-center gap-3">
              <Search size={14} className="text-white/20" />
              <input 
                type="text" 
                placeholder="SEARCH..." 
                className="bg-transparent border-none outline-none text-xs text-white w-full placeholder:text-white/20 uppercase tracking-widest"
              />
            </div>
          </div>

          <div className="flex-1 px-3 pb-6 space-y-6">
            {sidebarSections.map((section, idx) => (
              <div key={idx}>
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-3 px-4">
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = activeTab === item.id;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-md transition-all text-left group
                          ${isActive ? 'bg-white/5' : 'hover:bg-white/[0.02]'}
                        `}
                      >
                        <Icon 
                          size={18} 
                          className={`transition-colors ${
                            isActive 
                              ? 'text-cyan-400' 
                              : item.color || 'text-white/60 group-hover:text-white/80'
                          }`} 
                        />
                        <span className={`text-[13px] font-medium tracking-wide ${
                          isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                        }`}>
                          {item.id}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* --- Content Area --- */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#050505] border-y border-r border-white/5 rounded-r-lg">
          {showCode ? (
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="bg-[#111] border-b border-white/5 px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400">{activeTab}</span>
                <button 
                  onClick={() => navigator.clipboard.writeText(projectFiles[activeTab] || '')}
                  className="text-[10px] uppercase tracking-widest bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded text-white/60 transition-colors"
                >
                  Copy Code
                </button>
              </div>
              <div className="flex-1 overflow-auto custom-scrollbar">
                <SyntaxHighlighter 
                  language="cpp" 
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    background: 'transparent',
                    fontSize: '13px',
                    fontFamily: '"JetBrains Mono", monospace'
                  }}
                >
                  {projectFiles[activeTab] || '// File not found'}
                </SyntaxHighlighter>
              </div>
            </div>
          ) : (
            <main className="flex-1 p-8 overflow-y-auto custom-scrollbar relative flex flex-col">
              {/* Grid Layout for Controls */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 flex-1">
                {activeTab === 'self.cpp' && (
                  <>
                    <div className="flex flex-col gap-3">
                      <ControlCard title="GOD MODE" desc="PREVENTS ALL DAMAGE." control={<Toggle active={true} />} />
                      <ControlCard title="INVISIBLE" desc="MAKES YOUR CHARACTER UNSEEN." control={<Toggle active={false} />} />
                      <ControlCard title="SUPER JUMP" desc="JUMP HIGHER THAN NORMAL." control={<Toggle active={false} />} />
                      <ControlCard title="FAST RUN" desc="INCREASE RUNNING SPEED." control={<Toggle active={true} />} />
                      <ControlCard title="NEVER WANTED" desc="PREVENT POLICE FROM CHASING YOU." control={<Toggle active={true} />} />
                    </div>
                    <div className="flex flex-col gap-3">
                      <ControlCard title="NO RAGDOLL" desc="PREVENT FALLING OVER." control={<Toggle active={false} />} />
                      <ControlCard title="WANTED LEVEL" desc="SET CURRENT WANTED LEVEL." active={true} control={<Slider value={0} />} />
                      <ControlCard title="MAX HEALTH/ARMOR" desc="REFILL HEALTH AND ARMOR." control={<ActionButton text="APPLY" />} />
                      <ControlCard title="CLEAN PLAYER" desc="REMOVE BLOOD AND DIRT." control={<ActionButton text="APPLY" />} />
                      <ControlCard title="SUICIDE" desc="KILL YOUR CHARACTER." control={<ActionButton text="APPLY" />} />
                    </div>
                  </>
                )}

            {activeTab === 'lobby.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="FORCE HOST" desc="BECOME LOBBY HOST." control={<Toggle active={true} />} />
                  <ControlCard title="PLAYER MAGNET" desc="ATTRACT ALL PLAYERS." control={<Toggle active={false} />} />
                  <ControlCard title="CLEAR WEATHER" desc="REMOVE RAIN AND CLOUDS." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="SET TIME" desc="CHANGE LOBBY TIME." active={true} control={<Slider value={12} />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="KICK ALL" desc="REMOVE EVERYONE FROM LOBBY." control={<ActionButton text="EXECUTE" />} />
                  <ControlCard title="CRASH ALL" desc="CRASH EVERYONE'S GAME." control={<ActionButton text="EXECUTE" />} />
                  <ControlCard title="SEND MESSAGE" desc="SEND MESSAGE TO ALL." control={<ActionButton text="SEND" />} />
                </div>
              </>
            )}

            {activeTab === 'players.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="SPECTATE" desc="WATCH SELECTED PLAYER." control={<Toggle active={false} />} />
                  <ControlCard title="DROP MONEY" desc="GIVE MONEY TO PLAYER." control={<Toggle active={false} />} />
                  <ControlCard title="FREEZE" desc="FREEZE PLAYER IN PLACE." control={<Toggle active={false} />} />
                  <ControlCard title="CAGE" desc="TRAP PLAYER IN A CAGE." control={<ActionButton text="APPLY" />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="EXPLODE" desc="BLOW UP PLAYER." control={<ActionButton text="EXECUTE" />} />
                  <ControlCard title="KICK" desc="REMOVE PLAYER FROM LOBBY." control={<ActionButton text="EXECUTE" />} />
                  <ControlCard title="CRASH" desc="CRASH PLAYER'S GAME." control={<ActionButton text="EXECUTE" />} />
                  <ControlCard title="GIVE WEAPONS" desc="GIVE ALL WEAPONS." control={<ActionButton text="APPLY" />} />
                </div>
              </>
            )}

            {activeTab === 'teleport.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="TO WAYPOINT" desc="TELEPORT TO MAP WAYPOINT." control={<ActionButton text="TELEPORT" />} />
                  <ControlCard title="TO OBJECTIVE" desc="TELEPORT TO MISSION OBJECTIVE." control={<ActionButton text="TELEPORT" />} />
                  <ControlCard title="SAFEHOUSE" desc="TELEPORT TO APARTMENT." control={<ActionButton text="TELEPORT" />} />
                  <ControlCard title="AIRPORT" desc="TELEPORT TO LSIA." control={<ActionButton text="TELEPORT" />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="CUSTOM X" desc="X COORDINATE." active={true} control={<Slider value={0} />} />
                  <ControlCard title="CUSTOM Y" desc="Y COORDINATE." active={true} control={<Slider value={0} />} />
                  <ControlCard title="CUSTOM Z" desc="Z COORDINATE." active={true} control={<Slider value={0} />} />
                  <ControlCard title="TELEPORT TO COORDS" desc="GO TO CUSTOM LOCATION." control={<ActionButton text="TELEPORT" />} />
                </div>
              </>
            )}

            {activeTab === 'weapons.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="GIVE ALL WEAPONS" desc="ADD ALL WEAPONS TO INVENTORY." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="INFINITE AMMO" desc="NEVER RUN OUT OF AMMO." control={<Toggle active={true} />} />
                  <ControlCard title="EXPLOSIVE AMMO" desc="BULLETS EXPLODE ON IMPACT." control={<Toggle active={false} />} />
                  <ControlCard title="FIRE AMMO" desc="BULLETS SET TARGETS ON FIRE." control={<Toggle active={false} />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="RAPID FIRE" desc="SHOOT FASTER." control={<Toggle active={true} />} />
                  <ControlCard title="NO RELOAD" desc="NEVER HAVE TO RELOAD." control={<Toggle active={true} />} />
                  <ControlCard title="AIMBOT" desc="AUTOMATICALLY AIM AT TARGETS." control={<Toggle active={false} />} />
                  <ControlCard title="DAMAGE MULTIPLIER" desc="INCREASE WEAPON DAMAGE." active={true} control={<Slider value={10} />} />
                </div>
              </>
            )}

            {activeTab === 'world.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="BLACKOUT MODE" desc="TURN OFF ALL CITY LIGHTS." control={<Toggle active={true} />} />
                  <ControlCard title="RIOT MODE" desc="NPCS ATTACK EACH OTHER." control={<Toggle active={true} />} />
                  <ControlCard title="LOW GRAVITY" desc="REDUCE GRAVITY FOR ALL OBJECTS." control={<Toggle active={true} />} />
                  <ControlCard title="CHAOS MODE" desc="RANDOM EXPLOSIONS AND EVENTS." control={<Toggle active={true} />} />
                  <div className="mt-2 flex flex-col gap-3">
                    <ControlCard title="PEDESTRIAN DENSITY" desc="ADJUST NPC POPULATION." active={true} control={<Slider value={1} />} />
                    <ControlCard title="TRAFFIC DENSITY" desc="ADJUST VEHICLE POPULATION." active={true} control={<Slider value={1} />} />
                  </div>
                  <div className="mt-2">
                    <ControlCard title="CLEAR AREA" desc="REMOVE PEDS AND TRAFFIC." control={<ActionButton text="APPLY" />} />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="SPAWN RAMP" desc="PLACE A RAMP IN THE WORLD." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="SPAWN BUILDING" desc="PLACE A BUILDING OBSTACLE." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="SPAWN BARRIER" desc="PLACE A CONCRETE BARRIER." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="SPAWN CONTAINER" desc="PLACE A SHIPPING CONTAINER." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="SPAWN TREE" desc="PLACE A DECORATIVE TREE." control={<ActionButton text="APPLY" />} />
                </div>
              </>
            )}

            {activeTab === 'vehicle.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="SPAWN T20" desc="SPAWN SUPERCAR." control={<ActionButton text="SPAWN" />} />
                  <ControlCard title="SPAWN LAZER" desc="SPAWN FIGHTER JET." control={<ActionButton text="SPAWN" />} />
                  <ControlCard title="SPAWN OPPRESSOR" desc="SPAWN FLYING BIKE." control={<ActionButton text="SPAWN" />} />
                  <ControlCard title="VEHICLE GOD MODE" desc="PREVENT VEHICLE DAMAGE." control={<Toggle active={true} />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="MAX UPGRADES" desc="APPLY ALL PERFORMANCE MODS." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="REPAIR VEHICLE" desc="FIX ALL DAMAGE." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="HORN BOOST" desc="BOOST FORWARD WHEN HONKING." control={<Toggle active={false} />} />
                  <ControlCard title="ENGINE ALWAYS ON" desc="PREVENT ENGINE STALLING." control={<Toggle active={true} />} />
                  <ControlCard title="SPEED MULTIPLIER" desc="INCREASE TOP SPEED." active={true} control={<Slider value={2} />} />
                </div>
              </>
            )}

            {activeTab === 'recovery.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="ADD MONEY" desc="ADD CASH TO BANK." active={true} control={<Slider value={1000000} />} />
                  <ControlCard title="SET RANK" desc="SET CHARACTER RANK." active={true} control={<Slider value={100} />} />
                  <ControlCard title="UNLOCK ALL" desc="UNLOCK ALL ITEMS AND SKILLS." control={<ActionButton text="UNLOCK" />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="MAX SKILLS" desc="SET ALL SKILLS TO 100%." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="CLEAR REPORTS" desc="REMOVE ALL PLAYER REPORTS." control={<ActionButton text="CLEAR" />} />
                </div>
              </>
            )}

            {activeTab === 'lua.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="LOAD SCRIPT" desc="LOAD A CUSTOM LUA SCRIPT." control={<ActionButton text="LOAD" />} />
                  <ControlCard title="UNLOAD ALL" desc="UNLOAD ALL ACTIVE SCRIPTS." control={<ActionButton text="UNLOAD" />} />
                  <ControlCard title="ALLOW UNSAFE" desc="ALLOW SCRIPTS TO USE DANGEROUS NATIVES." control={<Toggle active={false} />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="AIMBOT.LUA" desc="CUSTOM AIMBOT SCRIPT." control={<Toggle active={true} />} />
                  <ControlCard title="ESP.LUA" desc="CUSTOM ESP SCRIPT." control={<Toggle active={true} />} />
                  <ControlCard title="MONEY_DROP.LUA" desc="CUSTOM MONEY DROP SCRIPT." control={<Toggle active={false} />} />
                </div>
              </>
            )}

            {activeTab === 'misc.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="SKIP CUTSCENE" desc="SKIP CURRENT CUTSCENE." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="UNLOCK ACHIEVEMENTS" desc="UNLOCK ALL GAME ACHIEVEMENTS." control={<ActionButton text="APPLY" />} />
                  <ControlCard title="ANTI-AFK" desc="PREVENT IDLE KICK." control={<Toggle active={true} />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="FPS BOOST" desc="OPTIMIZE GAME FOR PERFORMANCE." control={<Toggle active={false} />} />
                  <ControlCard title="HIDE HUD" desc="REMOVE ALL ON-SCREEN UI." control={<Toggle active={false} />} />
                  <ControlCard title="FREE CAM" desc="DETACH CAMERA FROM PLAYER." control={<Toggle active={false} />} />
                </div>
              </>
            )}

            {activeTab === 'protection.cpp' && (
              <>
                <div className="flex flex-col gap-3">
                  <ControlCard title="BLOCK KICKS" desc="PREVENT MODDERS FROM KICKING YOU." control={<Toggle active={true} />} />
                  <ControlCard title="BLOCK CRASHES" desc="PREVENT MODDERS FROM CRASHING YOU." control={<Toggle active={true} />} />
                  <ControlCard title="BLOCK EXPLOSIONS" desc="PREVENT REMOTE EXPLOSIONS." control={<Toggle active={true} />} />
                </div>
                <div className="flex flex-col gap-3">
                  <ControlCard title="BLOCK ATTACHMENTS" desc="PREVENT OBJECTS FROM BEING ATTACHED." control={<Toggle active={true} />} />
                  <ControlCard title="BLOCK REPORTS" desc="BLOCK IN-GAME REPORTS." control={<Toggle active={true} />} />
                  <ControlCard title="NOTIFY ON BLOCK" desc="SHOW NOTIFICATION WHEN BLOCKED." control={<Toggle active={true} />} />
                </div>
              </>
            )}

            {activeTab === 'favorites.h' && (
              <div className="col-span-2 flex items-center justify-center text-white/40 text-sm uppercase tracking-widest h-full">
                No favorites added yet.
              </div>
            )}
          </div>

          {/* Bottom Stats Row */}
          <div className="flex gap-6 mt-8">
            <StatCard 
              icon={Sun} 
              iconColor="text-amber-500" 
              title="SOLAR INTENSITY" 
              value="1.24 GW" 
            />
            <StatCard 
              icon={Wind} 
              iconColor="text-cyan-400" 
              title="WIND VELOCITY" 
              value="14.2 M/S" 
            />
            <StatCard 
              icon={Clock} 
              iconColor="text-white/40" 
              title="TIME SCALE" 
              value="1.00X" 
            />
          </div>
        </main>
      )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}} />
    </div>
  );
}
