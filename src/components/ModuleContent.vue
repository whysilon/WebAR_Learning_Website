<template>
    <Stepper value = '1'>
        <StepItem v-for="(title, index) in moduleContent.title" :key="index" :value="index+1" >
            <Step> {{moduleContent.title[index]}}</Step>
            <StepPanel v-slot="{ activateCallback }"> 
              <p>{{ moduleContent.content[index] }}</p>  
              <div class="flex py-6 gap-2">
                <Button label="Back" v-if="index != 0" severity="secondary" @click="activateCallback(index)" />
                <Button label="Next" v-if="index != moduleContent.title.length-1" @click="activateCallback(index+1+1)" />
              </div>
            </StepPanel>
        </StepItem>
    </Stepper>
    
</template>

<script setup>
import { StepList, Stepper } from 'primevue';
import moduleContent from '@/assets/Module1.json';

</script>

