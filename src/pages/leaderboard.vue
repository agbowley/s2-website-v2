<template>
    <div class="text-center">
        <v-data-table :headers="headers" :items="leaderboardData" :items-per-page="100"
            class="elevation-6 leaderboard-table" dark sort-by="rank" sort-asc
            :footer-props="{ 'items-per-page-options': [100, 250, 500, -1] }">
            <template v-slot:item.action="{ item }">
                <v-icon small class="mr-2" @click="openDetails(item)">mdi-information</v-icon>
            </template>
        </v-data-table>

        <v-dialog dark v-model="dialogVisible" max-width="600px">
            <v-card>
                <v-card-title class="headline">{{ selectedItem.name }}</v-card-title>
                <v-card-text>
                    Rank: {{ selectedItem.rank }}<br />
                    Skill Factor: {{ selectedItem.skillFactor }}<br />
                    <!-- Add more detailed stats here -->
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary darken-1" text @click="dialogVisible = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
import Vue from "vue";

export default Vue.extend({
    name: 'index',
    data() {
        const generateGaussian = (mean, stdDev) => {
            let u = Math.random();
            let v = Math.random();
            
            let x = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
            return mean + x * stdDev;
        }

        const nameList = [
                'Time','Past','Future','Dev',
                'Fly','Flying','Soar','Soaring','Power','Falling',
                'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
                'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
                'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
                'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
                'Mine','Your','Worst','Enemy','Hostile','Force','Video',
                'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
                'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
                'Script','Writer','Near','Close','Open','Cube','Circle',
                'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
                'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
                'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
                'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
                'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
                'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
                'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
                'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
                'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
                'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
                'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
            ];

        const leaderboardData = Array.from({ length: 250 }, () => ({
            name: `${nameList[Math.floor(Math.random() * nameList.length)]}`,
            skillFactor: Math.max(0, Math.min(350, Math.floor(generateGaussian(125, 75)))),
        }));
        leaderboardData.sort((a, b) => b.skillFactor - a.skillFactor);
        leaderboardData.forEach((item, i) => {
            item.rank = i + 1;
        });

        return {
            headers: [
                { text: 'Rank', value: 'rank' },
                { text: 'Name', value: 'name' },
                { text: 'Skill Factor', value: 'skillFactor' },
                { text: 'Details', value: 'action', sortable: false },
            ],
            leaderboardData,
            dialogVisible: false,
            selectedItem: {},
        };
    },
    methods: {
        openDetails(item) {
            this.selectedItem = item;
            this.dialogVisible = true;
        },
    },
});
</script>
  
<style scoped>
.leaderboard-table {
    /* width: 80%; */
    max-width: 1000px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
}

@media (max-width: 1050px) {
    .leaderboard-table {
        margin: 50px;
    }
}

@media (max-width: 700px) {
    .leaderboard-table {
        width: 100%;
        max-width: 1000px;
        margin: auto;
    }
}

</style>
  