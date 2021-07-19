#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>
#include <time.h>

typedef struct Faction{
	char name[100];
	int troops;
	int losses = 0;
	int discipline = 100; // How obedient, educated the troops are. 100% base, +100% more obedients than usual...
}faction;

int setData(faction x, char label[100]){
	int t;

	printf("Enter the %s of %s: ", label, x.name);
	scanf("%d", &t);

	return t;
}

int battle(int los, int dis) { // los = enemy troops
	int r, M = 15, m = 1;

	r = rand()%(M - m + 1) + m; // Dice
	r = r + ((los/50) * (dis/50)); // Equivalent to enemy soldiers * discipline

	return r;
}

void showData(faction a, faction b, int days) { // a = attacker, b = defender
	printf("%d \t \t Troops: %d - Losses: %d \t \t Troops: %d - Losses: %d \n", days, a.troops, a.losses, b.troops, b.losses);
}

void showWinner(faction a, faction b) {
    if(a.troops > b.troops) {
        printf("\n");
        for(int i = 0; i < (strlen(a.name) + 24) ; i++) printf("*");
        printf("\n* The %s wins the battle *\n", a.name);
        for(int i = 0; i < (strlen(a.name) + 24) ; i++) printf("*");
    } else {
        printf("\n");
        for(int i = 0; i < (strlen(b.name) + 24) ; i++) printf("*");
        printf("\n* The %s wins the battle *\n", b.name);
        for(int i = 0; i < (strlen(b.name) + 24) ; i++) printf("*");
    }
}

int main() {
	int days = 0, casualties, a;
	char name[100];
	faction attacker, defender;
	srand(time(NULL));

	printf("Enter the name of the attackers: ");
	gets(attacker.name);
	attacker.troops = setData(attacker, "amount of troops");
	attacker.discipline = attacker.discipline + setData(attacker, "discipline bonus");


	fflush(stdin);
	printf("\n");
	printf("Enter the name of the defender: ");
	gets(defender.name);
	defender.troops = setData(defender, "amount of troops");
	defender.discipline = defender.discipline + setData(defender, "discipline bonus");


	printf("\nDay  \t\t%s\t\t\t\t\t%s\n\n", attacker.name, defender.name); // Title

	while((attacker.troops > 0) && (defender.troops > 0)) { // battle
		casualties = battle(defender.troops, defender.discipline);
		attacker.troops = attacker.troops - casualties; // Calculate de attacker losses
		attacker.losses = attacker.losses + casualties;

		casualties = battle(attacker.troops, attacker.discipline);
        defender.troops = defender.troops - casualties; // Calculate de defender losses
        defender.losses = defender.losses + casualties;

		days++;
		showData(attacker, defender, days); // show the daily results
	}

	showWinner(attacker, defender);
	return 0;
}
